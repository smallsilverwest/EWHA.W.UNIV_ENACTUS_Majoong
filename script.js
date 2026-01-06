// URL 파라미터 읽기
const params = new URLSearchParams(window.location.search);
const guardianNumber = params.get("guardian");

// 버튼 요소
const guardianBtn = document.getElementById("guardianBtn");
const police182Btn = document.getElementById("police182Btn");
const emergencyBtn = document.getElementById("emergencyBtn");

/* 보호자 */
if (guardianNumber) {
  guardianBtn.addEventListener("click", () => {
    window.location.href = `tel:${guardianNumber}`;
  });
} else {
  guardianBtn.textContent = "보호자 번호 없음";
  guardianBtn.style.backgroundColor = "#999";
}

/* 182 -> 오작동 방지를 위해서 한 번 더 물어보기 */
police182Btn.addEventListener("click", () => {
  const ok = confirm(
    "실종 신고(182)로 전화 연결됩니다.\n계속하시겠습니까?"
  );
  if (ok) {
    window.location.href = "tel:182";
  }
});

/* 112 */
emergencyBtn.addEventListener("click", () => {
  const ok = confirm(
    "⚠️ 긴급 번호 112입니다.\n위급한 상황일 때만 연결하세요.\n\n정말 전화하시겠습니까?"
  );
  if (ok) {
    window.location.href = "tel:112";
  }
});
