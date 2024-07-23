<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Reservation') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="overflow-x-auto">
                    @if ($reservations->count() > 0)
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-blue-600 text-white">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nom</th>
                                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Lieu</th>
                                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Catégorie</th>
                                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Heure</th>
                                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">État</th>
                                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Details</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            @foreach ($reservations as $reservation)
                                <tr class="hover:bg-blue-50">
                                    <td class="px-6 py-4 whitespace-nowrap">{{ $reservation->nom }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ $reservation->email }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ $reservation->lieu }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ $reservation->categorie }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ $reservation->date }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ $reservation->heure }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap {{$reservation->confirmed == "confirmée" ?' text-green-600' : "text-red-600"}}  ">{{ $reservation->confirmed }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <a href="{{ route('reservations.show', $reservation->id) }}" class="text-blue-500 hover:underline">Details</a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                @else
                    <div class="p-6 text-center text-gray-500">
                        <p>No reservations available.</p>
                    </div>
                @endif
                    <div class="py-4">
                        {{ $reservations->links() }} <!-- This will render the pagination links -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</x-app-layout>
