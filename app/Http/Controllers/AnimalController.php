<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use App\Models\Farm;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class AnimalController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     */
    public function index($id): View
    {
        $name = Farm::select('farm_name')->where('id', $id)->get()[0];

        return view('animal', [
            'id' => $id,
            'name' => $name
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): void
    {
        Animal::create([
            'number' => $request->get('number'),
            'name' => $request->get('name'),
            'age' => $request->get('age'),
            'farm_id' => $request->get('farm_id'),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request): JsonResponse
    {
        $id = $request->get('farmId');

        $animals = Animal::where('farm_id', $id)->get();
        return response()->json($animals);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request): JsonResponse
    {
        $animal = Animal::findOrFail($request->get('animalId'));
        return response()->json($animal);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request): void
    {
        $id = $request->get('animalId');
        $number = $request->get('number');
        $name = $request->get('name');
        $age = $request->get('age');

        Animal::where('id', $id)->update([
            'number' => $number,
            'name' => $name,
            'age' => $age,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Animal $animal): void
    {
        $animal->delete();
    }
}
