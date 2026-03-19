const data = {
  phone: "01012345678",
  status: "missing" // normal / missing
};

// 📞 전화 연결
document.getElementById("callBtn").href = `tel:${data.phone}`;

// 🔴 상태 표시
const statusText = document.getElementById("statusText");
const toggle = document.querySelector(".toggle");

if (data.status === "missing") {
  statusText.innerText = "🔴 현재, 실종 신고가 접수된 어르신입니다.";
  statusText.style.display = "inline";   // 보이기
  toggle.classList.add("active");
} else {
  statusText.style.display = "none";     // 🔥 완전히 숨김
  toggle.classList.remove("active");
}

// 👤 페이지 이동
document.getElementById("infoBtn").href = "user.html";
