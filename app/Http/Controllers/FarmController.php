<?php

namespace App\Http\Controllers;

use App\Models\Farm;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class FarmController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(): View
    {
        return view('farm');
    }

    public function getFarmList(): JsonResponse
    {
//        $farms = Farm::all();
        $farms = Farm::where('user_id', Auth::user()->id)->get();
        $farms->loadCount('animal');

        return response()->json($farms);
    }

    public function getFarmDetails(Request $request): JsonResponse
    {
        $farms = Farm::findOrFail($request->get('farmId'));
        return response()->json($farms);
    }

    public function store(Request $request): void
    {
        Farm::create([
            'farm_name' => $request->get('farm_name'),
            'email' => $request->get('email'),
            'website' => $request->get('website'),
            'user_id' => Auth::user()->id,
        ]);
    }

    public function update(Request $request): void
    {
        $id = $request->get('farmId');
        $name = $request->get('farm_name');
        $email = $request->get('email');
        $website = $request->get('website');

        Farm::where('id', $id)->update([
            'farm_name' => $name,
            'email' => $email,
            'website' => $website
        ]);
    }

    public function destroy(Farm $farm): void
    {
        $farm->delete();
    }

//    public function destroy(Request $request): JsonResponse
//    {
//        $farm = Farm::find($request->get('farmId'));
//        $farm->delete();
//
//        return response()->json([
//            'message'=>'Product Deleted Successfully!!'
//        ]);
//
//    }

}
