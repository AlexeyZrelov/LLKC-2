<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><?php echo e(__('Dashboard')); ?></div>

                <div class="card-body">
                    <?php if(session('status')): ?>
                        <div class="alert alert-success" role="alert">
                            <?php echo e(session('status')); ?>

                        </div>
                    <?php endif; ?>

                    <?php echo e(__('You are logged in!')); ?>



                        <div class="content-wrapper">
                            <div class="container-fluid">
                                <div class="row">

                                    <!-- Icon Cards-->
                                    <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                                        <div class="border border-1 rounded-3 p-3">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 col-sm-4 col-4">
                                                    <img src="<?php echo e(asset('/img/farmer.svg')); ?>" alt="house" width="30" height="30">
                                                </div>
                                                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                                    <h4>Users</h4>
                                                    <h2>
                                                        <span class="badge bg-secondary">
                                                            <?php echo e($userCount); ?>

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
                                                    <img src="<?php echo e(asset('/img/warehouse.svg')); ?>" alt="house" width="30" height="30">
                                                </div>
                                                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                                    <h4>Farms</h4>
                                                    <h2>
                                                        <span class="badge bg-primary">
                                                            <?php echo e($farmCount); ?>

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
                                                    <img src="<?php echo e(asset('/img/cow.svg')); ?>" alt="house" width="30" height="30">
                                                </div>
                                                <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                                    <h4>Animals</h4>
                                                    <h2>
                                                        <span class="badge bg-success">
                                                            <?php echo e($animalCount); ?>

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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/alex/home_work/LLKC/LLKC-2/resources/views/home.blade.php ENDPATH**/ ?>