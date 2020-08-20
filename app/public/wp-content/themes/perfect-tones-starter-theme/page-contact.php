<!-- 
   Template Name: Contact
 -->

<?php get_header();  ?>

<div class="wrapper">

  <div class="contact-form">
    <?php // Start the loop ?>
    <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

      <h1><?php the_title(); ?></h1>
      <?php the_content(); ?>

    <?php endwhile; // end the loop?>
  </div> <!-- /,content -->


</div>

<?php get_footer(); ?>