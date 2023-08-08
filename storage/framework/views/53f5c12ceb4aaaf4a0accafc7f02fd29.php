<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <img src="<?php echo e(asset('/img/warehouse.svg')); ?>" alt="house" width="20" height="20">
                        <?php echo e(__('Farms')); ?>

                    </div>

                    <div class="card-body">
                        <?php if(session('status')): ?>
                            <div class="alert alert-success" role="alert">
                                <?php echo e(session('status')); ?>

                            </div>
                        <?php endif; ?>


                        <h5>Owner: <?php echo e(Auth::user()->name); ?></h5>

                        <div id="farms"></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/alex/home_work/LLKC/LLKC-2/resources/views/farm.blade.php ENDPATH**/ ?>