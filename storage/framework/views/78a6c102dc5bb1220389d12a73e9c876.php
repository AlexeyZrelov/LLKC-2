<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <div>
                            <img src="<?php echo e(asset('/img/cow.svg')); ?>" alt="house" width="20" height="20">
                            <?php echo e(__('Animals')); ?>

                        </div>
                        <a href="<?php echo e(route('farm')); ?>" class="btn btn-primary btn-sm"><< Back</a>
                    </div>

                    <div class="card-body">
                        <?php if(session('status')): ?>
                            <div class="alert alert-success" role="alert">
                                <?php echo e(session('status')); ?>

                            </div>
                        <?php endif; ?>

                        <h5>Farm ID: <?php echo e($id); ?></h5>
                        <h5>Farm name: <?php echo e($name->farm_name); ?></h5>

                        <div id="animal" data-farm-id="<?php echo e($id); ?>"></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/alex/home_work/LLKC/LLKC-2/resources/views/animal.blade.php ENDPATH**/ ?>