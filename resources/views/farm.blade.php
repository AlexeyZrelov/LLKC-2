@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <img src="{{ asset('/img/warehouse.svg')}}" alt="house" width="20" height="20">
                        {{ __('Farms') }}
                    </div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

{{--                        {{ __('You are logged in!') }}--}}
                        <h5>Owner: {{ Auth::user()->name }}</h5>

                        <div id="farms"></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
