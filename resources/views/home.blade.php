@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
{{--                        <h5>Owner: {{ Auth::user()->name }}</h5>--}}

                        <div class="content-wrapper">
                            <div class="container-fluid">
                                <div class="row">

                                    <!-- Icon Cards-->
                                    <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                                        <div class="border border-1 rounded-3 p-3">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 col-sm-4 col-4">
                                                    <img src="{{ asset('/img/farmer.svg')}}" alt="house" width="30" height="30">
                                                </div>
                                                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                                    <h4>Users</h4>
                                                    <h2>
                                                        <span class="badge bg-secondary">
                                                            {{ $userCount }}
                                                        </span>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                                        <div class="border border-1 rounded-3 p-3">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 col-sm-4 col-4">
                                                    <img src="{{ asset('/img/warehouse.svg')}}" alt="house" width="30" height="30">
                                                </div>
                                                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                                    <h4>Farms</h4>
                                                    <h2>
                                                        <span class="badge bg-primary">
                                                            {{ $farmCount }}
                                                        </span>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                                        <div class="border border-1 rounded-3 p-3">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 col-sm-4 col-4">
                                                    <img src="{{ asset('/img/cow.svg')}}" alt="house" width="30" height="30">
                                                </div>
                                                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                                    <h4>Animals</h4>
                                                    <h2>
                                                        <span class="badge bg-success">
                                                            {{ $animalCount }}
                                                        </span>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
