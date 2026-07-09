import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  featured_media: number;
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
      fetch(`${WP_BASE}/posts?per_page=50&_fields=id,title,excerpt,date,slug,categories,featured_media`).then((r) => r.json()),
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

  const getCatName = (catIds: number[]) => {
    const cat = categories.find((c) => catIds.includes(c.id));
    return cat?.name ?? "";
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <Header />

      {/* 히어로 */}
      <section className="pt-32 pb-14 px-6 bg-white border-b border-[#E4EAF3]">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] text-[#1A73E8] uppercase mb-4">
            <span className="w-5 h-px bg-[#1A73E8]" />
            BLOG
          </span>
          <h1
            className="text-4xl md:text-5xl font-black text-[#10233F] leading-tight tracking-tight"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            건강을 설계하는 지식
          </h1>
          <p className="mt-4 text-[#556579] text-lg max-w-xl leading-relaxed">
            원료, 과학, 그리고 웰니스 라이프스타일에 관한 깊이 있는 이야기
          </p>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <div className="sticky top-[76px] z-30 bg-white/80 backdrop-blur border-b border-[#E4EAF3]">
        <div className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === null
                ? "bg-[#1A73E8] text-white"
                : "bg-[#EAF1FE] text-[#1A73E8] hover:bg-[#d0e4ff]"
            }`}
          >
            전체
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.id
                  ? "bg-[#1A73E8] text-white"
                  : "bg-[#EAF1FE] text-[#1A73E8] hover:bg-[#d0e4ff]"
              }`}
            >
              {cat.name}
              <span className="ml-1.5 text-xs opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* 포스트 그리드 */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#E4EAF3] h-64 animate-pulse" />
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <p className="text-center text-[#556579] py-20">포스트가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="bg-white border border-[#E4EAF3] border-t-[3px] border-t-[#1A73E8] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div className="flex items-center justify-between">
                    {getCatName(post.categories) && (
                      <span className="bg-[#EAF1FE] text-[#1A73E8] text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
                        {getCatName(post.categories)}
                      </span>
                    )}
                    <span className="text-[11px] text-[#8A98A8] ml-auto">{formatDate(post.date)}</span>
                  </div>

                  <h2
                    className="font-bold text-[17px] text-[#10233F] leading-snug flex-1"
                    style={{ fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {post.title.rendered}
                  </h2>

                  <p className="text-[13.5px] text-[#556579] leading-relaxed line-clamp-3">
                    {stripHtml(post.excerpt.rendered).slice(0, 110)}
                  </p>
                </div>

                <div className="px-6 pb-5 pt-1">
                  <span className="text-[#1A73E8] text-sm font-semibold">
                    자세히 읽기 →
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Blog;
