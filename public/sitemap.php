<?php
header('Content-Type: application/xml; charset=utf-8');
header('X-Robots-Tag: noindex');

$base = 'https://waoh.life';
$today = date('Y-m-d');

// SPA 전용 페이지만 포함. 블로그 글은 WordPress /sitemap_index.xml 에서 관리.
$static = [
  ['loc' => '',                        'priority' => '1.0', 'changefreq' => 'weekly'],
  ['loc' => '/podcast',                'priority' => '0.8', 'changefreq' => 'weekly'],
  ['loc' => '/ingredients-technology', 'priority' => '0.8', 'changefreq' => 'monthly'],
  ['loc' => '/youth-reset',            'priority' => '0.8', 'changefreq' => 'monthly'],
  ['loc' => '/about',                  'priority' => '0.7', 'changefreq' => 'monthly'],
  ['loc' => '/products/super-gclean',  'priority' => '0.7', 'changefreq' => 'monthly'],
  ['loc' => '/products/super-immune',  'priority' => '0.7', 'changefreq' => 'monthly'],
  ['loc' => '/products/super-greens',  'priority' => '0.7', 'changefreq' => 'monthly'],
  ['loc' => '/products/super-zyme',    'priority' => '0.7', 'changefreq' => 'monthly'],
  ['loc' => '/products/better-salt',   'priority' => '0.7', 'changefreq' => 'monthly'],
];

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

foreach ($static as $item) {
  echo "  <url>\n";
  echo "    <loc>" . htmlspecialchars($base . $item['loc']) . "</loc>\n";
  echo "    <lastmod>{$today}</lastmod>\n";
  echo "    <changefreq>{$item['changefreq']}</changefreq>\n";
  echo "    <priority>{$item['priority']}</priority>\n";
  echo "  </url>\n";
}

echo '</urlset>';
