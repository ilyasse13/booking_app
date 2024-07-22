<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Reservation') }}
        </h2>
    </x-slot>
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="bg-blue-600 p-4 text-white text-center">
            <h2 class="text-2xl font-bold">Reservation Details</h2>
        </div>
        <div class="p-6">
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Nom</h3>
                <p class="text-gray-600">{{ $reservation->nom }}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Email</h3>
                <p class="text-gray-600">{{ $reservation->email }}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Telephone</h3>
                <p class="text-gray-600">{{ $reservation->telephone }}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Date</h3>
                <p class="text-gray-600">{{ $reservation->date }}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Heure</h3>
                <p class="text-gray-600">{{ $reservation->heure }}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Nb. Adultes</h3>
                <p class="text-gray-600">{{ $reservation->nbre_adultes }}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Nb. Enfants</h3>
                <p class="text-gray-600">{{ $reservation->nbre_enfants }}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Message</h3>
                <p class="text-gray-600">{{ $reservation->message }}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Lieu</h3>
                <p class="text-gray-600">{{ $reservation->lieu }}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Catégorie</h3>
                <p class="text-gray-600">{{ $reservation->categorie }}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-800">État</h3>
                <p class="text-gray-600">{{ $reservation->confirmed }}</p>
            </div>
        </div>
    </div>
    
</x-app-layout>