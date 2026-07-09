import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  categories: number[];
}

interface WPCategory {
  id: number;
  name: string;
  count: number;
}

const WP_BASE = "https://waoh.life/wp-json/wp/v2";
const HIDDEN_SLUGS = ["hello-world"];
const HIDDEN_CATS = ["Uncategorized"];

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "").trim();

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [categories, setCategories] = useState<WPCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${WP_BASE}/posts?per_page=50&_fields=id,title,excerpt,date,slug,categories`).then((r) => r.json()),
      fetch(`${WP_BASE}/categories?per_page=50`).then((r) => r.json()),
    ]).then(([postsData, catsData]) => {
      setPosts(postsData.filter((p: WPPost) => !HIDDEN_SLUGS.includes(p.slug)));
      setCategories(catsData.filter((c: WPCategory) => !HIDDEN_CATS.includes(c.name) && c.count > 0));
      setLoading(false);
    });
  }, []);

  const filteredPosts = activeCategory
    ? posts.filter((p) => p.categories.includes(activeCategory))
    : posts;

  const getCatName = (catIds: number[]) =>
    categories.find((c) => catIds.includes(c.id))?.name ?? "";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* 헤더 */}
          <div className="text-center mb-14">
            <p className="font-mono-label mb-3">BLOG</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              건강을 설계하는 지식
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              원료, 과학, 그리고 웰니스 라이프스타일에 관한 깊이 있는 이야기
            </p>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors border ${
                activeCategory === null
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              전체
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors border ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* 포스트 그리드 */}
          {loading ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-muted/50 rounded-xl border h-64 animate-pulse" />
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">포스트가 없습니다.</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="bg-muted/50 rounded-xl border p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    {getCatName(post.categories) && (
                      <span className="font-mono-label">{getCatName(post.categories)}</span>
                    )}
                    <span className="text-xs text-muted-foreground ml-auto">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <h2 className="font-semibold text-foreground mb-3 flex-1 leading-snug">
                    {post.title.rendered}
                  </h2>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                    {stripHtml(post.excerpt.rendered).slice(0, 120)}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="self-start rounded-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground pointer-events-none"
                  >
                    자세히 읽기 →
                  </Button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Blog;
