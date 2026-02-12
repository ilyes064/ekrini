export default function Navbar() {
  return (
    <div style={{
      backgroundColor: "#1877F2",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white"
    }}>
      <h2 style={{ margin: 0 }}>أكريني</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <span>الرئيسية</span>
        <span>استكشف المنازل</span>
        <span>أضف إعلان</span>
        <span>اتصل بنا</span>
      </div>

      <button style={{
        backgroundColor: "white",
        color: "#1877F2",
        padding: "8px 15px",
        border: "none",
        borderRadius: "6px"
      }}>
        تسجيل الدخول
      </button>
    </div>
  );
}
