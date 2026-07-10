import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import productSuperGClean from "@/assets/product-super-gclean.png";

// ─── 데이터 ───────────────────────────────────────────────

const RECOMMEND_CARDS = [
  {
    icon: "🫄",
    title: "장이 자주 불편하거나 변비가 있는 분",
    desc: "생효소의 가수분해 작용으로 장 속 노폐물 배출을 돕습니다.",
  },
  {
    icon: "⚖️",
    title: "다이어트를 시작하려는 분",
    desc: "장 클렌징으로 대사 환경을 정돈하고 체중 관리를 지원합니다.",
  },
  {
    icon: "✨",
    title: "피부 트러블·칙칙함이 고민인 분",
    desc: "장 건강과 피부는 직결됩니다. 장 클렌징으로 속부터 맑게.",
  },
  {
    icon: "🔋",
    title: "만성피로·무기력함을 느끼는 분",
    desc: "노폐물 배출을 통해 에너지 순환이 원활해지도록 돕습니다.",
  },
];

const WHY_POINTS = [
  {
    icon: "🌿",
    title: "900종 이상의 생효소",
    desc: "900일 이상 자연 발효·배양된 효소가 장 속 노폐물을 직접 분해합니다.",
  },
  {
    icon: "⚡",
    title: "빠른 작용 시간",
    desc: "섭취 후 2시간 내 장 활동을 촉진하는 것을 경험할 수 있습니다.",
  },
  {
    icon: "🍃",
    title: "순수 천연 성분",
    desc: "인공 감미료·색소·보존제 없이 천연 효소와 식물 추출물만 담았습니다.",
  },
];

const FAQS = [
  {
    q: "하루에 얼마나 섭취하나요?",
    a: "1일 1회, 1포(120ml)를 생수 500~2,000ml에 희석해 섭취하십시오.",
  },
  {
    q: "언제 섭취하면 가장 좋나요?",
    a: "공복 상태인 아침에 섭취하는 것이 가장 효과적입니다.",
  },
  {
    q: "부작용은 없나요?",
    a: "천연 효소 제품으로 일반적으로 안전하지만, 처음 섭취 시 장이 민감하게 반응할 수 있습니다.",
  },
  {
    q: "냉장 보관이 필요한가요?",
    a: "직사광선을 피하고 서늘한 곳에 보관하십시오. 개봉 후에는 냉장 보관을 권장합니다.",
  },
];

const PRODUCT_INFO = [
  { label: "제품명", value: "슈퍼지클린 SUPER G.Clean" },
  { label: "품목제조보고번호", value: "20020375076102" },
  { label: "내용량", value: "120ml" },
  { label: "유형", value: "기타가공식품" },
  { label: "제조업체", value: "(주)효소세상" },
  { label: "수입업소명", value: "주식회사 씨투엘코리아" },
  { label: "보관방법", value: "직사광선을 피하고 서늘한 곳에 보관하십시오." },
  {
    label: "섭취량 및 섭취방법",
    value: "1일 1회, 120ml씩 3~5배의 생수(미온수)에 희석하여 섭취하시오.",
  },
  {
    label: "주의사항",
    value: "취침 전에 응용은 삼가하여 주시기 바랍니다.",
  },
];

const NUTRITION = [
  { name: "열량", amount: "279.56 kcal", pct: "-" },
  { name: "탄수화물", amount: "6.9 g", pct: "21.17%" },
  { name: "지방", amount: "0.11 g", pct: "0%" },
  { name: "단백질", amount: "0.18 g", pct: "0%" },
  { name: "나트륨", amount: "0.91 mg", pct: "0%" },
  { name: "당류", amount: "1.29 mg", pct: "0%" },
  { name: "포화지방", amount: "0 mg", pct: "0%" },
  { name: "트랜스지방", amount: "0 mg", pct: "0%" },
  { name: "콜레스테롤", amount: "0 mg", pct: "0%" },
];

// ─── 컴포넌트 ──────────────────────────────────────────────

const SuperGClean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <Header />

      {/* ════════════════════════════════════════
          1. 히어로 섹션
      ════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #004D58 0%, #0AABBB 100%)",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "48px",
          }}
        >
          {/* 제품 이미지 */}
          <div
            style={{
              flex: "1 1 280px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={productSuperGClean}
              alt="슈퍼지클린 제품"
              style={{
                maxWidth: "320px",
                width: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.3))",
              }}
            />
          </div>

          {/* 텍스트 */}
          <div style={{ flex: "1 1 300px" }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              SUPER G.CLEAN
            </p>
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                lineHeight: 1.25,
                color: "#ffffff",
                marginBottom: "20px",
                wordBreak: "keep-all",
                whiteSpace: "pre-line",
              }}
            >
              {"2시간의 마법,\n장 상태 개선 클렌징 솔루션"}
            </h1>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                marginBottom: "32px",
                wordBreak: "keep-all",
              }}
            >
              900일 자연배양 생효소로 장 속 노폐물을 가수분해하고 빠르게
              배출합니다.
            </p>

            {/* 뱃지 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {["900종 생효소", "노폐물 가수분해", "600억 유산균 대비 우수"].map(
                (badge) => (
                  <span
                    key={badge}
                    style={{
                      display: "inline-block",
                      padding: "8px 18px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.35)",
                      color: "#ffffff",
                      fontSize: "13px",
                      fontWeight: 600,
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. 추천 대상 섹션
      ════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#0AABBB",
              textTransform: "uppercase",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            RECOMMENDATION
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              color: "#111111",
              textAlign: "center",
              marginBottom: "48px",
              wordBreak: "keep-all",
            }}
          >
            이런 분들께 추천합니다
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {RECOMMEND_CARDS.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid #E5E7EB",
                  borderRadius: "16px",
                  borderTop: "3px solid #0AABBB",
                  padding: "28px 24px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <span style={{ fontSize: "32px", display: "block", marginBottom: "16px" }}>
                  {card.icon}
                </span>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#111111",
                    marginBottom: "10px",
                    wordBreak: "keep-all",
                    lineHeight: 1.5,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#6B7280",
                    lineHeight: 1.65,
                    wordBreak: "keep-all",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. 왜 슈퍼지클린인가 섹션
      ════════════════════════════════════════ */}
      <section
        style={{
          padding: "80px 24px",
          background: "#F0FAFB",
        }}
      >
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#0AABBB",
              textTransform: "uppercase",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            WHY SUPER G.CLEAN
          </p>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 800,
              color: "#111111",
              textAlign: "center",
              marginBottom: "56px",
              wordBreak: "keep-all",
            }}
          >
            600억개 유산균보다 슈퍼지클린이 나은 이유
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "28px",
            }}
          >
            {WHY_POINTS.map((point, idx) => (
              <div
                key={point.title}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "36px 28px",
                  boxShadow: "0 4px 16px rgba(10,171,187,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "24px",
                    fontSize: "48px",
                    opacity: 0.08,
                    fontWeight: 900,
                    color: "#0AABBB",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontSize: "36px",
                    display: "block",
                    marginBottom: "20px",
                  }}
                >
                  {point.icon}
                </span>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#111111",
                    marginBottom: "12px",
                    wordBreak: "keep-all",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                    wordBreak: "keep-all",
                  }}
                >
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. 섭취 방법 섹션
      ════════════════════════════════════════ */}
      <section
        style={{
          padding: "80px 24px",
          background: "linear-gradient(135deg, #003D45, #007A8A)",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "1080px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.6)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            HOW TO USE
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "48px",
              wordBreak: "keep-all",
            }}
          >
            섭취 방법과 물의 비율
          </h2>

          {/* 큰 시각 박스 */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "20px",
              padding: "32px 48px",
              marginBottom: "36px",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 900,
                color: "#7EEEFF",
                letterSpacing: "-0.02em",
              }}
            >
              120ml
            </span>
            <span
              style={{
                fontSize: "clamp(20px, 3vw, 32px)",
                color: "rgba(255,255,255,0.5)",
                fontWeight: 300,
              }}
            >
              +
            </span>
            <span
              style={{
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              생수 500~2,000ml
            </span>
          </div>

          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.75,
              maxWidth: "560px",
              margin: "0 auto 20px",
              wordBreak: "keep-all",
            }}
          >
            1일 1회, 슈퍼지클린 120ml를 생수(미온수) 3~5배에 희석하여 공복에
            섭취하세요.
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
              wordBreak: "keep-all",
            }}
          >
            ※ 취침 전 응용은 삼가 주세요.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. FAQ 섹션
      ════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#0AABBB",
              textTransform: "uppercase",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              color: "#111111",
              textAlign: "center",
              marginBottom: "56px",
              wordBreak: "keep-all",
            }}
          >
            자주 묻는 질문
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: "16px",
                  border: "1px solid #E5E7EB",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "22px 24px",
                    background: "#F0FAFB",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 800,
                      color: "#0AABBB",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    Q
                  </span>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#111111",
                      lineHeight: 1.6,
                      wordBreak: "keep-all",
                    }}
                  >
                    {faq.q}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "22px 24px",
                    background: "#ffffff",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 800,
                      color: "#9CA3AF",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    A
                  </span>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#4B5563",
                      lineHeight: 1.75,
                      wordBreak: "keep-all",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          6. 제품 정보 테이블 섹션
      ════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#0AABBB",
              textTransform: "uppercase",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            PRODUCT DETAILS
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              color: "#111111",
              textAlign: "center",
              marginBottom: "48px",
              wordBreak: "keep-all",
            }}
          >
            제품 상세 정보
          </h2>

          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #E5E7EB",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {PRODUCT_INFO.map((row, idx) => (
                  <tr
                    key={row.label}
                    style={{
                      background: idx % 2 === 0 ? "#ffffff" : "#F9FAFB",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#374151",
                        width: "160px",
                        borderBottom:
                          idx < PRODUCT_INFO.length - 1
                            ? "1px solid #F3F4F6"
                            : "none",
                        verticalAlign: "top",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.label}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "13px",
                        color: "#6B7280",
                        borderBottom:
                          idx < PRODUCT_INFO.length - 1
                            ? "1px solid #F3F4F6"
                            : "none",
                        lineHeight: 1.65,
                        wordBreak: "keep-all",
                      }}
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          7. 영양성분 테이블 섹션
      ════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", background: "#F0FAFB" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#0AABBB",
              textTransform: "uppercase",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            NUTRITION FACTS
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              color: "#111111",
              textAlign: "center",
              marginBottom: "48px",
              wordBreak: "keep-all",
            }}
          >
            영양성분 (1회분량 100ml 기준)
          </h2>

          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #D1FAE5",
              boxShadow: "0 4px 16px rgba(10,171,187,0.06)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#0AABBB" }}>
                  <th
                    style={{
                      padding: "14px 20px",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#ffffff",
                      textAlign: "left",
                      letterSpacing: "0.05em",
                    }}
                  >
                    항목
                  </th>
                  <th
                    style={{
                      padding: "14px 20px",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#ffffff",
                      textAlign: "right",
                      letterSpacing: "0.05em",
                    }}
                  >
                    함량
                  </th>
                  <th
                    style={{
                      padding: "14px 20px",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#ffffff",
                      textAlign: "right",
                      letterSpacing: "0.05em",
                    }}
                  >
                    %영양성분기준치
                  </th>
                </tr>
              </thead>
              <tbody>
                {NUTRITION.map((row, idx) => (
                  <tr
                    key={row.name}
                    style={{
                      background: idx % 2 === 0 ? "#ffffff" : "#F0FAFB",
                    }}
                  >
                    <td
                      style={{
                        padding: "13px 20px",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#374151",
                        borderBottom:
                          idx < NUTRITION.length - 1
                            ? "1px solid #E5E7EB"
                            : "none",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        padding: "13px 20px",
                        fontSize: "13px",
                        color: "#111111",
                        fontWeight: 600,
                        textAlign: "right",
                        borderBottom:
                          idx < NUTRITION.length - 1
                            ? "1px solid #E5E7EB"
                            : "none",
                      }}
                    >
                      {row.amount}
                    </td>
                    <td
                      style={{
                        padding: "13px 20px",
                        fontSize: "13px",
                        color: "#6B7280",
                        textAlign: "right",
                        borderBottom:
                          idx < NUTRITION.length - 1
                            ? "1px solid #E5E7EB"
                            : "none",
                      }}
                    >
                      {row.pct}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "#9CA3AF",
              marginTop: "20px",
              wordBreak: "keep-all",
            }}
          >
            ※ %영양성분 기준치 : 1일 영양성분기준치에 대한 비율
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          8. 하단 CTA 섹션
      ════════════════════════════════════════ */}
      <section
        style={{
          padding: "80px 24px",
          background: "linear-gradient(135deg, #004D58, #0AABBB)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
              wordBreak: "keep-all",
            }}
          >
            지금 바로 시작하세요.
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
              wordBreak: "keep-all",
            }}
          >
            슈퍼지클린으로 장 건강부터 다시 설계하세요.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                padding: "16px 40px",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#0AABBB",
                fontSize: "15px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 16px rgba(0,0,0,0.15)";
              }}
            >
              구매하기
            </button>
            <a
              href="/#contact"
              style={{
                padding: "16px 40px",
                borderRadius: "999px",
                background: "transparent",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 700,
                border: "2px solid rgba(255,255,255,0.7)",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.7)";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
              }}
            >
              1:1 상담 신청
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default SuperGClean;
