<?php

use App\Http\Controllers\ProfileController;
use App\Models\Reservation;
use Illuminate\Support\Facades\Route;



Route::get('/dashboard', function () {
    $reservations= Reservation::all();
    return view('dashboard',['reservations'=>$reservations]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard/{id}', function ($id) {
    $reservation= Reservation::findOrFail($id);
    return view('details',['reservation'=>$reservation]);
})->middleware('auth')->name('reservations.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
