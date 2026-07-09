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
      if (postsData.length > 0) {
        setPost(postsData[0]);
      } else {
        setNotFound(true);
      }
      setCategories(catsData);
      setLoading(false);
    });
  }, [slug]);

  const getCatName = (catIds: number[]) => {
    const cat = categories.find((c) => catIds.includes(c.id));
    return cat?.name ?? "";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-28 pb-24 px-6 max-w-2xl mx-auto">
        {/* 뒤로가기 */}
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-1.5 text-sm text-[#1A73E8] font-semibold mb-10 hover:opacity-70 transition-opacity"
        >
          ← 블로그 목록
        </button>

        {loading && (
          <div className="space-y-5 animate-pulse">
            <div className="h-5 bg-[#E4EAF3] rounded w-24" />
            <div className="h-10 bg-[#E4EAF3] rounded w-3/4" />
            <div className="h-4 bg-[#E4EAF3] rounded w-1/3" />
            <div className="space-y-3 pt-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-[#E4EAF3] rounded" />
              ))}
            </div>
          </div>
        )}

        {notFound && (
          <p className="text-[#556579] text-center py-20">포스트를 찾을 수 없습니다.</p>
        )}

        {!loading && post && (
          <>
            {/* 메타 */}
            <div className="flex items-center gap-3 mb-5">
              {getCatName(post.categories) && (
                <span className="bg-[#EAF1FE] text-[#1A73E8] text-xs font-bold px-3 py-1 rounded-full">
                  {getCatName(post.categories)}
                </span>
              )}
              <span className="text-xs text-[#8A98A8]">{formatDate(post.date)}</span>
            </div>

            {/* 제목 */}
            <h1
              className="text-3xl md:text-4xl font-black text-[#10233F] leading-tight tracking-tight mb-10"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              {post.title.rendered}
            </h1>

            {/* 구분선 */}
            <hr className="border-[#E4EAF3] mb-10" />

            {/* 본문 */}
            <div
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* 하단 버튼 */}
            <div className="mt-16 pt-8 border-t border-[#E4EAF3]">
              <button
                onClick={() => navigate("/blog")}
                className="inline-flex items-center gap-2 text-sm text-[#1A73E8] font-semibold hover:opacity-70 transition-opacity"
              >
                ← 블로그 목록으로 돌아가기
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
