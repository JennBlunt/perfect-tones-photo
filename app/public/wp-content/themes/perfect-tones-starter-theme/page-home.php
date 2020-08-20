<!-- 
   Template Name: Home
 -->

 <?php get_header();  ?>

<div class="wrapper">

  <div class="home">
    <?php // Start the loop ?>
    <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

      <h1><?php the_title(); ?></h1>
      <?php the_content(); ?>

    <div class="home-slideshow">
        <?php echo do_shortcode('[metaslider title="New Slideshow"]'); ?>
    </div>
    
    <?php endwhile; // end the loop?>
  </div> <!-- /,content -->


</div>

<?php get_footer(); ?>