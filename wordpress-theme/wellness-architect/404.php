<?php
/**
 * 404 template.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main class="container" style="padding-top:10rem; padding-bottom:6rem; text-align:center; max-width:36rem;">
	<p class="font-mono-label" style="margin-bottom:0.75rem;">404</p>
	<h1 class="section-head__title">페이지를 찾을 수 없습니다</h1>
	<p class="section-head__desc" style="margin-bottom:2rem;">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
	<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary btn-lg">홈으로 돌아가기</a>
</main>
<?php
get_footer();
