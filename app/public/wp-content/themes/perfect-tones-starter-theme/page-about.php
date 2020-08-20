<!-- 
   Template Name: About
 -->

<?php get_header(); ?>
<div class="wrapper">
  <div class="content">
    

    <section class="about">

        <div class='bio'>
            <?php if(get_field('bio')): ?>
                <p><?php the_field('bio'); ?></p>
            <?php endif; ?>
        </div>
    ​
        <div class='about-image'>
            
            <?php $first_image = get_field('first_image'); ?>
            <?php echo wp_get_attachment_image(
                $first_image,
                'large'
                ); ?>
      
        </div>

    </section>


  </div> <!-- /.content -->

</div>

<?php get_footer(); ?>


