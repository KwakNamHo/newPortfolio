// 다크 모드
const toggleBtn = document.getElementById("toggle-dark")
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark")
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  )
})
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark")
}

// 마우스 따라다니는 점
const cursor = document.getElementById("cursor-dot")
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`
  cursor.style.top = `${e.clientY}px`
})

// 카드 클릭 시 부드러운 열림/닫힘
function toggleCard(card) {
  card.classList.toggle("open")
}

// 관심 분야 버튼
const fieldData = {
  forensic:
    "디지털 포렌식은 범죄나 사이버 공격의 흔적을 분석하고 증거를 확보하는 기술입니다.",
  monitoring:
    "보안 관제는 실시간으로 시스템 로그와 트래픽을 분석해 위협을 탐지하고 대응하는 활동입니다.",
  cert: "CERT는 침해사고에 대한 분석, 대응, 예방 가이드를 제공하는 보안 전문 대응 조직입니다.",
}
// 포트폴리오 버튼 클릭 시 실제 링크로 이동
function goToPortfolio(type) {
  const links = {
    html1: "https://knhweb.vercel.app/", // 예시 주소
    html2: "https://knhfrom.vercel.app/", // 예시 주소
    midterm: "https://namho-portfolio.vercel.app/", // 예시 주소
  }
  const url = links[type]
  if (url) {
    window.open(url, "_blank") // 새 탭에서 열기
  }
}

function showField(key) {
  document.getElementById("field-desc").textContent = fieldData[key]
}

// function showField(key) {
//   document.getElementById("field-desc").textContent = fieldData[key]
// }

// 한 번만 뜨는 "어서오세요!" 또는 "다시 와주셔서 반가워요!" 같은 팝업
const visited = sessionStorage.getItem("visited")
if (!visited) {
  alert("처음 방문해주셔서 감사합니다!")
  sessionStorage.setItem("visited", "true")
}
