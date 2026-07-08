<?php
/**
 * Pillars section — the 4 cornerstones.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$wa_pillars = wa_get_pillars();
?>
<section id="pillars" class="pillars">
	<div class="container container--narrow">
		<div class="section-head">
			<p class="font-mono-label section-head__eyebrow"><?php echo esc_html( wa_field( 'pillars_eyebrow', 'THE 4 CORNERSTONES' ) ); ?></p>
			<h2 class="section-head__title"><?php echo esc_html( wa_field( 'pillars_heading', '무너진 기초를 세우는 4개의 코너스톤 기둥' ) ); ?></h2>
			<p class="section-head__desc"><?php echo esc_html( wa_field( 'pillars_desc', '단순한 처방이 아닌, 생체 건축물을 다시 세우는 웰니스 아키텍트의 4대 코너스톤 설계도입니다.' ) ); ?></p>
		</div>
		<div class="pillars__grid">
			<?php foreach ( $wa_pillars as $pillar ) : ?>
				<div class="pillar-card">
					<span class="pillar-card__icon"><?php echo wa_icon( $pillar['icon'], 28 ); ?></span>
					<h3 class="pillar-card__title"><?php echo esc_html( $pillar['title'] ); ?></h3>
					<p class="pillar-card__desc"><?php echo esc_html( $pillar['desc'] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
