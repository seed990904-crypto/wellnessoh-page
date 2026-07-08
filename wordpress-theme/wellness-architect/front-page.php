<?php
/**
 * Front page — the single-page Wellness Architect landing.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

get_template_part( 'template-parts/section', 'hero' );
get_template_part( 'template-parts/section', 'about' );
get_template_part( 'template-parts/section', 'pillars' );
get_template_part( 'template-parts/section', 'youth-reset' );
get_template_part( 'template-parts/section', 'biohacking' );
get_template_part( 'template-parts/section', 'contact' );

get_footer();
