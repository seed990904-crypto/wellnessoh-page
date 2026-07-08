<?php
/**
 * Page template for the slug "ingredients-technology" — 원료&기술력 상세 페이지.
 *
 * WordPress automatically loads this file for the Page whose slug is
 * "ingredients-technology" (template hierarchy: page-{slug}.php). Create that
 * Page once in wp-admin (title/content don't matter, this template overrides
 * the output) and this file takes over.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
get_template_part( 'template-parts/section', 'ingredients-technology' );
get_footer();
