import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

interface WPPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  categories: number[];
}

interface WPCategory {
  id: number;
  name: string;
}

const WP_BASE = "https://waoh.life/wp-json/wp/v2";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<WPPost | null>(null);
  const [categories, setCategories] = useState<WPCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    Promise.all([
      fetch(`${WP_BASE}/posts?slug=${slug}&_fields=id,title,content,date,categories`).then((r) => r.json()),
      fetch(`${WP_BASE}/categories?per_page=50`).then((r) => r.json()),
    ]).then(([postsData, catsData]) => {
      if (postsData.length > 0) setPost(postsData[0]);
      else setNotFound(true);
      setCategories(catsData);
      setLoading(false);
    });
  }, [slug]);

  const getCatName = (catIds: number[]) =>
    categories.find((c) => catIds.includes(c.id))?.name ?? "";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="py-28 px-6 md:px-12 max-w-3xl mx-auto">

        {/* 뒤로가기 */}
        <button
          onClick={() => navigate("/blog")}
          className="font-mono-label mb-12 hover:text-foreground transition-colors flex items-center gap-1.5"
        >
          ← BLOG
        </button>

        {loading && (
          <div className="space-y-5 animate-pulse">
            <div className="h-4 bg-muted rounded w-20" />
            <div className="h-10 bg-muted rounded w-3/4" />
            <div className="h-px bg-border mt-8 mb-8" />
            <div className="space-y-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded" style={{ width: `${85 + Math.random() * 15}%` }} />
              ))}
            </div>
          </div>
        )}

        {notFound && (
          <p className="text-muted-foreground text-center py-20">포스트를 찾을 수 없습니다.</p>
        )}

        {!loading && post && (
          <>
            {/* 메타 */}
            <div className="flex items-center gap-3 mb-5">
              {getCatName(post.categories) && (
                <span className="font-mono-label">{getCatName(post.categories)}</span>
              )}
              <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
            </div>

            {/* 제목 */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-10">
              {post.title.rendered}
            </h1>

            <hr className="border-border mb-10" />

            {/* 본문 */}
            <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

            {/* 하단 */}
            <div className="mt-16 pt-8 border-t border-border">
              <button
                onClick={() => navigate("/blog")}
                className="font-mono-label hover:text-foreground transition-colors"
              >
                ← 블로그 목록으로
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default BlogPost;
