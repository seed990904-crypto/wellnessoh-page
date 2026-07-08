<?php
/**
 * Biohacking tools / products section.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$wa_products = wa_get_products();

if ( ! function_exists( 'wa_render_product_card' ) ) {
	/**
	 * Render a single product card. Image is a ready-to-use URL.
	 *
	 * @param array $product Product data.
	 */
	function wa_render_product_card( $product ) {
		?>
		<div class="product-card">
			<div class="product-card__media">
				<img src="<?php echo esc_url( $product['image'] ); ?>" alt="<?php echo esc_attr( $product['name'] ); ?>" loading="lazy">
			</div>
			<h3 class="product-card__name"><?php echo esc_html( $product['name'] ); ?></h3>
			<p class="product-card__subtitle"><?php echo esc_html( $product['subtitle'] ); ?></p>
			<ul class="product-card__list">
				<?php foreach ( $product['bullets'] as $bullet ) : ?>
					<li><span class="product-card__dot"></span><?php echo esc_html( $bullet ); ?></li>
				<?php endforeach; ?>
			</ul>
			<a href="#contact" class="btn btn-outline-primary btn-sm"><?php echo esc_html( isset( $product['button_label'] ) ? $product['button_label'] : '자세히 보기' ); ?></a>
		</div>
		<?php
	}
}
?>
<section id="biohacking-tools" class="biohacking">
	<div class="container">
		<div class="section-head">
			<p class="font-mono-label section-head__eyebrow"><?php echo esc_html( wa_field( 'bio_eyebrow', 'BIOHACKING TOOLS' ) ); ?></p>
			<h2 class="section-head__title"><?php echo esc_html( wa_field( 'bio_heading', '바이오해킹 툴 [BioHacking Tools]' ) ); ?></h2>
			<p class="section-head__desc"><?php echo esc_html( wa_field( 'bio_desc', '웰니스 아키텍트가 4대 기둥의 기준을 가지고 설계한 완벽한 생체 복원 아키텍처입니다.' ) ); ?></p>
		</div>
		<div class="biohacking__wrap">
			<div class="biohacking__grid">
				<?php foreach ( array_slice( $wa_products, 0, 3 ) as $product ) : ?>
					<?php wa_render_product_card( $product ); ?>
				<?php endforeach; ?>
			</div>
			<?php $wa_rest = array_slice( $wa_products, 3 ); ?>
			<?php if ( ! empty( $wa_rest ) ) : ?>
				<div class="biohacking__grid biohacking__grid--two">
					<?php foreach ( $wa_rest as $product ) : ?>
						<?php wa_render_product_card( $product ); ?>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>
