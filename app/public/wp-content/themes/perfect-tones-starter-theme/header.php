<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet">


  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>
<header>
  <div class="main-nav">
    <div class="wrapper flex">
      <?php wp_nav_menu( array(
        'theme_location' => 'primary',
        'container_class' => 'menu'
      )); ?>
    </div>
  </div> 
</header>

<main id="maincontent">
