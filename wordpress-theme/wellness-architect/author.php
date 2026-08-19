<?php
/**
 * Author archive template — 저자 소개 페이지.
 *
 * @package Wellness_Architect
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$author      = get_queried_object();
$author_name = $author->display_name;
$author_bio  = $author->description;
$author_url  = get_author_posts_url( $author->ID );
$instagram   = 'https://www.instagram.com/wellness_architect.oh/';

$credentials = array(
	'19년 임상 현장 경험 — 통합면역·장뇌축·대사 건강 설계',
	'1만 명 이상 직접 상담·코칭',
	'통합면역센터·치매예방센터 의료진 협업',
	'Call2Life 창립 대표 / 바이오해킹 프로그램 청춘리셋 개발',
	'4대 코너스톤(면역·항산화·장뇌축·대사) 기반 웰니스 설계',
);

get_header();
?>

<main id="main" class="author-page">

	<!-- ── 히어로 섹션 ── -->
	<section class="author-hero">
		<div class="container">
			<div class="author-hero__inner">

				<div class="author-hero__photo-wrap">
					<img
						src="<?php echo esc_url( home_url( '/host-photo.png' ) ); ?>"
						alt="<?php echo esc_attr( $author_name ); ?> — 웰니스 아키텍트"
						class="author-hero__photo"
						width="240"
						height="240"
						loading="eager"
					>
				</div>

				<div class="author-hero__info">
					<p class="author-hero__label">저자 소개</p>
					<h1 class="author-hero__name"><?php echo esc_html( $author_name ); ?></h1>
					<p class="author-hero__title">웰니스 아키텍트 (Wellness Architect)<br>Call2Life 대표</p>

					<?php if ( $author_bio ) : ?>
						<p class="author-hero__bio"><?php echo nl2br( esc_html( $author_bio ) ); ?></p>
					<?php endif; ?>

					<div class="author-hero__links">
						<a href="<?php echo esc_url( $instagram ); ?>" target="_blank" rel="noopener noreferrer" class="author-hero__sns">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
							@wellness_architect.oh
						</a>
						<a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" class="author-hero__cta">
							1:1 웰니스 컨설팅 신청 →
						</a>
					</div>
				</div>

			</div>
		</div>
	</section>

	<!-- ── 전문성 자격 섹션 ── -->
	<section class="author-credentials">
		<div class="container">
			<h2 class="author-section__title">전문성 & 자격</h2>
			<ul class="author-credentials__list">
				<?php foreach ( $credentials as $item ) : ?>
					<li class="author-credentials__item">
						<span class="author-credentials__check" aria-hidden="true">✓</span>
						<?php echo esc_html( $item ); ?>
					</li>
				<?php endforeach; ?>
			</ul>
			<p class="author-credentials__disclaimer">
				본 콘텐츠는 정보 제공 목적이며 질병의 진단·치료를 대신하지 않습니다.<br>
				건강 문제는 반드시 의료 전문가와 상담하시기 바랍니다.
			</p>
		</div>
	</section>

	<!-- ── 최근 글 섹션 ── -->
	<section class="author-posts">
		<div class="container">
			<h2 class="author-section__title">발행한 글</h2>

			<?php
			$posts = new WP_Query( array(
				'author'         => $author->ID,
				'posts_per_page' => 12,
				'post_status'    => 'publish',
				'orderby'        => 'date',
				'order'          => 'DESC',
				'post__not_in'   => array( get_option( 'page_on_front' ) ),
			) );

			if ( $posts->have_posts() ) : ?>
				<div class="author-posts__grid">
					<?php while ( $posts->have_posts() ) : $posts->the_post(); ?>
						<article class="author-post-card">
							<?php if ( has_post_thumbnail() ) : ?>
								<a href="<?php the_permalink(); ?>" class="author-post-card__thumb-link" tabindex="-1" aria-hidden="true">
									<?php the_post_thumbnail( 'medium', array( 'class' => 'author-post-card__thumb', 'loading' => 'lazy' ) ); ?>
								</a>
							<?php endif; ?>
							<div class="author-post-card__body">
								<time class="author-post-card__date" datetime="<?php echo esc_attr( get_the_date( 'Y-m-d' ) ); ?>">
									<?php echo esc_html( get_the_date( 'Y년 n월 j일' ) ); ?>
								</time>
								<h3 class="author-post-card__title">
									<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
								</h3>
								<p class="author-post-card__excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 22, '…' ) ); ?></p>
							</div>
						</article>
					<?php endwhile; wp_reset_postdata(); ?>
				</div>
			<?php else : ?>
				<p>아직 발행된 글이 없습니다.</p>
			<?php endif; ?>
		</div>
	</section>

</main>

<?php get_footer(); ?>
