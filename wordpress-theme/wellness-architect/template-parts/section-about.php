<?php
/**
 * About section.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$about = wa_get_about();
?>
<section id="about" class="about">
	<div class="container container--narrow">
		<div class="about__grid">
			<div>
				<img class="about__portrait" src="<?php echo esc_url( $about['portrait'] ); ?>" alt="<?php echo esc_attr( $about['heading'] ); ?>" loading="lazy">
			</div>
			<div class="about__body">
				<p class="font-mono-label"><?php echo esc_html( $about['eyebrow'] ); ?></p>
				<h2 class="about__title"><?php echo esc_html( $about['heading'] ); ?></h2>
				<p class="about__quote"><?php echo esc_html( $about['quote'] ); ?></p>
				<div class="about__text">
					<?php foreach ( $about['paragraphs'] as $para ) : ?>
						<p><?php echo esc_html( $para ); ?></p>
					<?php endforeach; ?>
				</div>
				<a href="#youth-reset" class="btn btn-primary btn-lg" style="align-self:flex-start;"><?php echo esc_html( $about['button_label'] ); ?></a>
			</div>
		</div>
	</div>
</section>
