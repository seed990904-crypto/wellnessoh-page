<?php
header('Content-Type: application/xml; charset=utf-8');
header('X-Robots-Tag: noindex');

$base = 'https://waoh.life';
$today = date('Y-m-d');

$static = [
  ['loc' => '',               'priority' => '1.0', 'changefreq' => 'weekly'],
  ['loc' => '/blog',          'priority' => '0.9', 'changefreq' => 'daily'],
  ['loc' => '/podcast',       'priority' => '0.8', 'changefreq' => 'weekly'],
  ['loc' => '/ingredients-technology', 'priority' => '0.8', 'changefreq' => 'monthly'],
  ['loc' => '/youth-reset',   'priority' => '0.8', 'changefreq' => 'monthly'],
  ['loc' => '/about',         'priority' => '0.7', 'changefreq' => 'monthly'],
  ['loc' => '/products/super-gclean',  'priority' => '0.7', 'changefreq' => 'monthly'],
  ['loc' => '/products/super-immune',  'priority' => '0.7', 'changefreq' => 'monthly'],
  ['loc' => '/products/super-greens',  'priority' => '0.7', 'changefreq' => 'monthly'],
  ['loc' => '/products/super-zyme',    'priority' => '0.7', 'changefreq' => 'monthly'],
  ['loc' => '/products/better-salt',   'priority' => '0.7', 'changefreq' => 'monthly'],
];

// Rank Math post-sitemap.xml 파싱 → /blog/slug 형태로 변환
$wp_posts = [];
$wp_sitemap_url = $base . '/post-sitemap.xml';

$xml_content = false;
if (function_exists('curl_init')) {
  $ch = curl_init($wp_sitemap_url);
  curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 8,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_USERAGENT      => 'WaohSitemap/1.0',
  ]);
  $xml_content = curl_exec($ch);
  curl_close($ch);
}
if (!$xml_content) {
  $xml_content = @file_get_contents($wp_sitemap_url);
}

if ($xml_content) {
  libxml_use_internal_errors(true);
  $xml = simplexml_load_string($xml_content);
  if ($xml) {
    $namespaces = $xml->getNamespaces(true);
    foreach ($xml->url as $url_node) {
      $loc = (string)$url_node->loc;
      // WordPress URL: https://waoh.life/some-slug/ → slug 추출
      $path = rtrim(parse_url($loc, PHP_URL_PATH), '/');
      $slug = basename($path);
      if ($slug && $slug !== 'hello-world') {
        $lastmod_raw = (string)($url_node->lastmod ?? '');
        $lastmod = $lastmod_raw ? substr($lastmod_raw, 0, 10) : $today;
        $wp_posts[] = [
          'loc'        => '/blog/' . $slug,
          'lastmod'    => $lastmod,
          'priority'   => '0.6',
          'changefreq' => 'monthly',
        ];
      }
    }
  }
}

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

foreach ($wp_posts as $item) {
  echo "  <url>\n";
  echo "    <loc>" . htmlspecialchars($base . $item['loc']) . "</loc>\n";
  echo "    <lastmod>{$item['lastmod']}</lastmod>\n";
  echo "    <changefreq>{$item['changefreq']}</changefreq>\n";
  echo "    <priority>{$item['priority']}</priority>\n";
  echo "  </url>\n";
}

echo '</urlset>';
