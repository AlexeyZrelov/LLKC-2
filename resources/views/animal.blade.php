@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <div>
                            <img src="{{ asset('/img/cow.svg')}}" alt="house" width="20" height="20">
                            {{ __('Animals') }}
                        </div>
                        <a href="{{ route('farm') }}" class="btn btn-primary btn-sm"><< Back</a>
                    </div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
{{--                        {{ __('You are logged in!') }}--}}
                        <h5>Farm ID: {{ $id }}</h5>
                        <h5>Farm name: {{ $name->farm_name }}</h5>

                        <div id="animal" data-farm-id="{{ $id }}"></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
