<?php
/**
 * Contact / 1:1 consultation section.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$wa_consult_status = isset( $_GET['wa_consult'] ) ? sanitize_key( wp_unslash( $_GET['wa_consult'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
?>
<section id="contact" class="contact">
	<div class="container container--xl">
		<div class="section-head">
			<p class="font-mono-label section-head__eyebrow"><?php echo esc_html( wa_field( 'contact_eyebrow', '1:1 CONSULTATION' ) ); ?></p>
			<h2 class="section-head__title"><?php echo esc_html( wa_field( 'contact_heading', '당신의 몸을 다시 설계할 준비가 되셨습니까?' ) ); ?></h2>
			<p class="section-head__desc"><?php echo esc_html( wa_field( 'contact_desc', '웰니스 아키텍트 오승우 대표와의 1:1 컨설팅을 신청하세요.' ) ); ?></p>
		</div>

		<?php if ( 'success' === $wa_consult_status ) : ?>
			<div class="form-message form-message--success">상담 신청이 접수되었습니다. 곧 연락드리겠습니다.</div>
		<?php elseif ( 'missing' === $wa_consult_status ) : ?>
			<div class="form-message form-message--error">이름, 연락처, 이메일을 모두 입력해 주세요.</div>
		<?php elseif ( 'error' === $wa_consult_status ) : ?>
			<div class="form-message form-message--error">요청을 처리할 수 없습니다. 다시 시도해 주세요.</div>
		<?php endif; ?>

		<form class="contact__form" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
			<input type="hidden" name="action" value="wa_consultation">
			<?php wp_nonce_field( 'wa_consultation', 'wa_consult_nonce' ); ?>

			<div class="field">
				<label for="wa_name">이름</label>
				<input type="text" id="wa_name" name="wa_name" placeholder="홍길동" required>
			</div>
			<div class="field">
				<label for="wa_phone">연락처</label>
				<input type="text" id="wa_phone" name="wa_phone" placeholder="010-1234-5678" required>
			</div>
			<div class="field">
				<label for="wa_email">이메일</label>
				<input type="email" id="wa_email" name="wa_email" placeholder="example@email.com" required>
			</div>
			<div class="field">
				<label for="wa_concern">현재 가장 큰 건강 고민</label>
				<textarea id="wa_concern" name="wa_concern" rows="4" placeholder="자유롭게 작성해 주세요."></textarea>
			</div>
			<button type="submit" class="btn btn-primary contact__submit"><?php echo esc_html( wa_field( 'contact_submit_label', '상담 신청하기' ) ); ?></button>
		</form>
	</div>
</section>
