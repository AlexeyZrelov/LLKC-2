<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use App\Models\Farm;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $userCount = User::count();
        $farmCount = Farm::count();
        $animalCount = Animal::count();

        return view('home', compact('userCount', 'farmCount', 'animalCount'));
    }
}
