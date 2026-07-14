import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

interface WPPost {
  id: number;
  title: { rendered: string };
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

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// C1~C4 카테고리 스타일 매핑
const getCategoryMeta = (name: string) => {
  if (/^C1/i.test(name))
    return {
      topBar: "bg-blue-500",
      badge: "bg-blue-50 text-blue-700",
      activeBadge: "bg-blue-500 text-white border-blue-500",
      dot: "bg-blue-500",
      filterBase: "border-blue-200 text-blue-700 hover:bg-blue-50",
    };
  if (/^C2/i.test(name))
    return {
      topBar: "bg-teal-500",
      badge: "bg-teal-50 text-teal-700",
      activeBadge: "bg-teal-500 text-white border-teal-500",
      dot: "bg-teal-500",
      filterBase: "border-teal-200 text-teal-700 hover:bg-teal-50",
    };
  if (/^C3/i.test(name))
    return {
      topBar: "bg-violet-500",
      badge: "bg-violet-50 text-violet-700",
      activeBadge: "bg-violet-500 text-white border-violet-500",
      dot: "bg-violet-500",
      filterBase: "border-violet-200 text-violet-700 hover:bg-violet-50",
    };
  if (/^C4/i.test(name))
    return {
      topBar: "bg-amber-500",
      badge: "bg-amber-50 text-amber-700",
      activeBadge: "bg-amber-500 text-white border-amber-500",
      dot: "bg-amber-500",
      filterBase: "border-amber-200 text-amber-700 hover:bg-amber-50",
    };
  return {
    topBar: "bg-muted-foreground/20",
    badge: "bg-muted text-muted-foreground",
    activeBadge: "bg-foreground text-background border-foreground",
    dot: "bg-muted-foreground",
    filterBase: "border-border text-muted-foreground hover:bg-muted",
  };
};

// C1→C2→C3→C4 순 정렬, 나머지는 뒤로
const sortCategories = (cats: WPCategory[]) =>
  [...cats].sort((a, b) => {
    const order = (n: string) => {
      if (/^C1/i.test(n)) return 1;
      if (/^C2/i.test(n)) return 2;
      if (/^C3/i.test(n)) return 3;
      if (/^C4/i.test(n)) return 4;
      return 5;
    };
    return order(a.name) - order(b.name);
  });

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [categories, setCategories] = useState<WPCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${WP_BASE}/posts?per_page=50&_fields=id,title,date,slug,categories`).then((r) => r.json()),
      fetch(`${WP_BASE}/categories?per_page=50`).then((r) => r.json()),
    ]).then(([postsData, catsData]) => {
      setPosts(postsData.filter((p: WPPost) => !HIDDEN_SLUGS.includes(p.slug)));
      setCategories(
        sortCategories(
          catsData.filter(
            (c: WPCategory) =>
              !HIDDEN_CATS.includes(c.name) &&
              (c.count > 0 || /^C[1-4]/i.test(c.name))
          )
        )
      );
      setLoading(false);
    });
  }, []);

  const filteredPosts = activeCategory
    ? posts.filter((p) => p.categories.includes(activeCategory))
    : posts;

  const getCatForPost = (catIds: number[]) =>
    categories.find((c) => catIds.includes(c.id));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* 헤더 */}
          <div className="text-center mb-12">
            <p className="font-mono-label mb-3">BLOG</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              건강을 설계하는 지식
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              원료, 과학, 그리고 웰니스 라이프스타일에 관한 깊이 있는 이야기
            </p>
          </div>

          {/* 4대 코너스톤 컬러 범례 */}
          {categories.filter((c) => /^C[1-4]/i.test(c.name)).length > 0 && (
            <div className="flex justify-center gap-4 flex-wrap mb-6">
              {categories
                .filter((c) => /^C[1-4]/i.test(c.name))
                .map((cat) => {
                  const meta = getCategoryMeta(cat.name);
                  return (
                    <div key={cat.id} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${meta.dot}`} />
                      <span>{cat.name}</span>
                    </div>
                  );
                })}
            </div>
          )}

          {/* 카테고리 필터 */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors border ${
                activeCategory === null
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              전체
            </button>
            {categories.map((cat) => {
              const meta = getCategoryMeta(cat.name);
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors border ${
                    isActive ? meta.activeBadge : `${meta.filterBase} bg-transparent`
                  }`}
                >
                  {!isActive && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${meta.dot}`} />}
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* 포스트 그리드 */}
          {loading ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-muted/50 rounded-xl border h-52 animate-pulse" />
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">포스트가 없습니다.</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {filteredPosts.map((post) => {
                const cat = getCatForPost(post.categories);
                const meta = getCategoryMeta(cat?.name ?? "");
                return (
                  <article
                    key={post.id}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="bg-white rounded-xl border overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col"
                  >
                    {/* 상단 컬러 accent 바 */}
                    <div className={`h-1 w-full ${meta.topBar}`} />

                    <div className="p-5 flex flex-col flex-1">
                      {/* 카테고리 + 날짜 */}
                      <div className="flex items-center justify-between mb-3">
                        {cat && (
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${meta.badge}`}>
                            {cat.name}
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground ml-auto">
                          {formatDate(post.date)}
                        </span>
                      </div>

                      {/* 제목 */}
                      <h2 className="text-sm font-semibold text-foreground leading-snug line-clamp-3 flex-1 mb-4">
                        {post.title.rendered}
                      </h2>

                      {/* 읽기 링크 */}
                      <span className="text-xs font-semibold text-primary">
                        읽기 →
                      </span>
                    </div>
                  </article>
                );
              })}
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
