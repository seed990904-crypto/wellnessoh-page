<?php
/**
 * Footer template.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<footer class="site-footer">
	<div class="container">
		<div class="site-footer__top">
			<p class="site-footer__brand"><?php echo esc_html( wa_field( 'footer_brand', 'Wellness Architect | 오승우' ) ); ?></p>
			<div class="site-footer__links">
				<a href="<?php echo esc_url( wa_field( 'footer_instagram', get_theme_mod( 'wa_instagram_url', '#' ) ) ); ?>" target="_blank" rel="noopener">인스타그램</a>
				<a href="<?php echo esc_url( wa_field( 'footer_cafe', get_theme_mod( 'wa_cafe_url', '#' ) ) ); ?>" target="_blank" rel="noopener">네이버 카페 (바이오해커 클럽)</a>
				<a href="<?php echo esc_url( wa_resolve_nav_href( '#contact' ) ); ?>">1:1 상담 문의</a>
			</div>
		</div>
		<p class="site-footer__copy"><?php echo esc_html( wa_field( 'footer_copyright', '© ' . gmdate( 'Y' ) . ' Call2Life. All rights reserved.' ) ); ?></p>
	</div>
</footer>

<a href="<?php echo esc_url( wa_resolve_nav_href( '#contact' ) ); ?>" class="floating-cta">💬 1:1 웰니스 컨설팅 신청하기</a>

<?php wp_footer(); ?>
</body>
</html>
