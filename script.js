/* 182 실종 신고 */
document.getElementById("police182Btn").addEventListener("click", () => {
  const ok = confirm(
    "실종 신고(182)로 전화 연결됩니다.\n계속하시겠습니까?"
  );
  if (ok) {
    window.location.href = "tel:182";
  }
});

/* 112 긴급 신고 */
document.getElementById("emergencyBtn").addEventListener("click", () => {
  const ok = confirm(
    "⚠️ 긴급 번호 112입니다.\n위급한 상황일 때만 사용하세요.\n\n정말 전화하시겠습니까?"
  );
  if (ok) {
    window.location.href = "tel:112";
  }
});
