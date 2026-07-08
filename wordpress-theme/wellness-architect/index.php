<?php
/**
 * Fallback template. WordPress uses front-page.php for the homepage; this
 * renders standard posts/pages and the blog index for everything else.
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
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();
			?>
			<article <?php post_class(); ?> style="margin-bottom:3rem;">
				<h1 class="section-head__title" style="text-align:left;"><?php the_title(); ?></h1>
				<div class="about__text" style="margin-top:1.5rem;">
					<?php the_content(); ?>
				</div>
			</article>
			<?php
		endwhile;

		the_posts_pagination();
	else :
		?>
		<p><?php esc_html_e( '콘텐츠가 없습니다.', 'wellness-architect' ); ?></p>
		<?php
	endif;
	?>
</main>
<?php
get_footer();
