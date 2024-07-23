<?php

namespace App\Http\Controllers;

use App\Mail\ReservationConfirmationMail;
use Illuminate\Support\Facades\Validator;
use App\Models\Reservation;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ReservationController extends Controller
{
    public function index()
    {
        // Get today's date
    $today = Carbon::today();

    // Delete all reservations with a date before today
    Reservation::where('date', '<', $today)->delete(); 
        $reservations = Reservation::orderBy('created_at', 'desc')->paginate(7);
        return view('dashboard',['reservations'=>$reservations]);
    }
    public function show($id)
    {
        $reservation= Reservation::findOrFail($id);

        return view('details',['reservation'=>$reservation]);
    }
    public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'nom' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'telephone' => 'required|string|max:20',
        'date' => 'required|string',
        'heure' => ['required', 'string'],
        'nbre_adultes' => 'required|integer|min:1',
        'nbre_enfants' => 'nullable|integer|min:0',
        'message' => 'nullable|string|max:500',
        'lieu'=>'required|string|max:255',
        'categorie'=>'required|string|max:255'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'errors' => $validator->errors()
        ], 422);
    }

    $reservation = Reservation::create([
        'nom' => $request->nom,
        'email' => $request->email,
        'telephone' => $request->telephone,
        'date' => $request->date,
        'heure' => $request->heure,
        'nbre_adultes' => $request->nbre_adultes,
        'nbre_enfants' => $request->nbre_enfants,
        'message' => $request->message,
        'token' => Str::random(32),
        'confirmed' => "en attente",
        'lieu'=>$request->lieu,
        'categorie'=>$request->categorie
    ]);

    $url = url('/api/reservations/confirm/' . $reservation->token);

    try {
        Mail::to($reservation->email)->send(new ReservationConfirmationMail($url));
    } catch (\Exception $e) {
        Log::error('Mail sending failed: ' . $e->getMessage());
        return response()->json(['message' => 'Reservation created, but failed to send confirmation email. Please try again later.'], 500);
    }

    return response()->json(['message' => 'Reservation created! Please check your email to confirm.'], 201);
}


    public function confirm($token)
    {
        $reservation = Reservation::where('token', $token)->firstOrFail();
        $reservation->confirmed = "confirmée";
        $reservation->save();

        return response()->json(['message' => 'Reservation confirmed!'], 200);
    }
}
