<?php
/**
 * Hero section.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$hero = wa_get_hero();
?>
<section id="hero" class="hero">
	<video class="hero__video" autoplay muted loop playsinline poster="<?php echo esc_url( $hero['poster'] ); ?>">
		<source src="<?php echo esc_url( $hero['video'] ); ?>" type="video/mp4">
	</video>
	<div class="hero__overlay"></div>
	<div class="hero__content">
		<h1 class="hero__title"><?php echo esc_html( $hero['title'] ); ?></h1>
		<p class="hero__subtitle"><?php echo esc_html( $hero['subtitle'] ); ?></p>
		<a href="#contact" class="btn hero__btn"><?php echo esc_html( $hero['cta_label'] ); ?></a>
		<p class="hero__note"><?php echo esc_html( $hero['note'] ); ?></p>
	</div>
</section>
