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
