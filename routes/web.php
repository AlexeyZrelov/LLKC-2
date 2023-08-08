<?php

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\FarmController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/farm', [FarmController::class, 'index'])->name('farm');
Route::get('/farm/list', [FarmController::class, 'getFarmList'])->name('farm.list');
Route::post('/farm/details', [FarmController::class, 'getFarmDetails'])->name('farm.details');
Route::post('/farm/add', [FarmController::class, 'store'])->name('farm.add');
Route::post('/farm/update', [FarmController::class, 'update'])->name('farm.update');
Route::delete('/farm/delete/{farm}', [FarmController::class, 'destroy'])->name('farm.delete');

Route::get('/animal/{id}', [AnimalController::class, 'index'])->name('animal.id');
Route::post('/animal/show', [AnimalController::class, 'show'])->name('animal.show');
Route::delete('/animal/delete/{animal}', [AnimalController::class, 'destroy'])->name('animal.delete');
Route::post('/animal/add', [AnimalController::class, 'store'])->name('animal.add');
Route::post('/animal/edit', [AnimalController::class, 'edit'])->name('animal.edit');
Route::post('/animal/update', [AnimalController::class, 'update'])->name('animal.update');
