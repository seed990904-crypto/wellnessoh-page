<?php
/**
 * Youth Reset program section.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$wa_phases      = wa_get_youth_phases();
$wa_phase_total = count( $wa_phases );
?>
<section id="youth-reset" class="youth">
	<div class="container container--narrow">
		<div class="section-head">
			<p class="youth__eyebrow"><?php echo esc_html( wa_field( 'youth_eyebrow', 'YOUTH RESET PROGRAM' ) ); ?></p>
			<h2 class="section-head__title"><?php echo esc_html( wa_field( 'youth_heading', '6주간의 완벽한 생체 재건축, 청춘리셋' ) ); ?></h2>
			<p class="section-head__desc"><?php echo esc_html( wa_field( 'youth_desc', "단순한 대증요법이 아닌 '루트케어(근본치료)'를 통해 신체의 자연치유력을 극대화하는 웰니스 아키텍트의 1:1 밀착 솔루션입니다." ) ); ?></p>
		</div>
		<div class="youth__grid">
			<?php foreach ( $wa_phases as $i => $phase ) : ?>
				<div class="youth-phase">
					<div class="youth-card">
						<span class="youth-card__badge"><?php echo esc_html( $phase['badge'] ); ?></span>
						<h3 class="youth-card__title"><?php echo esc_html( $phase['title'] ); ?></h3>
						<ul class="youth-card__list">
							<?php foreach ( $phase['points'] as $point ) : ?>
								<li><?php echo wa_icon( 'check', 16 ); ?><span><?php echo esc_html( $point ); ?></span></li>
							<?php endforeach; ?>
						</ul>
					</div>
				</div>
				<?php if ( $i < $wa_phase_total - 1 ) : ?>
					<div class="youth__arrow"><?php echo wa_icon( 'arrow-right', 20 ); ?></div>
				<?php endif; ?>
			<?php endforeach; ?>
		</div>
		<div class="youth__cta">
			<a href="#contact" class="btn btn-primary btn-lg"><?php echo esc_html( wa_field( 'youth_cta_label', '청춘리셋 다음 기수 대기자 등록하기' ) ); ?></a>
		</div>
	</div>
</section>
