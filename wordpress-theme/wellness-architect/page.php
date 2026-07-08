<?php
/**
 * Default page template.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main class="container" style="padding-top:9rem; padding-bottom:5rem; max-width:48rem;">
	<?php
	while ( have_posts() ) :
		the_post();
		?>
		<article <?php post_class(); ?>>
			<h1 class="section-head__title" style="text-align:left; margin-bottom:1.5rem;"><?php the_title(); ?></h1>
			<div class="about__text"><?php the_content(); ?></div>
		</article>
		<?php
	endwhile;
	?>
</main>
<?php
get_footer();
