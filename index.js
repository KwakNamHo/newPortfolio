const typing = document.getElementById("typing-text")
const cards = document.getElementById("card-container")

const cardData = [
  {
    title: "👤 자기소개",
    content: "정보보호학과 2학년<br>",
  },
  {
    title: "💻 GitHub",
    content:
      '<a href="https://github.com/KwakNamHo" target="_blank">깃허브 바로가기</a>',
  },
  {
    title: "🛠️ 기술 스택",
    content: "HTML, CSS, JavaScript",
  },
]

const enterBtn = document.createElement("a")
enterBtn.href = "my.html"
enterBtn.textContent = "👉 전체 포트폴리오 보기"
enterBtn.className = "enter-btn hidden"
document.body.appendChild(enterBtn)

let typingDone = false
let cardsCreated = false
let cardsRevealed = false

typing.addEventListener("animationend", () => {
  if (typingDone) return
  typing.classList.add("done")
  document.body.classList.add("flash")
  setTimeout(() => {
    document.body.classList.remove("flash")
    typing.classList.add("move-up")
    cards.classList.remove("hidden")
    createCards()
    typingDone = true
  }, 400)
})

// 🔁 fallback 타이머: 혹시 animationend가 안 걸리는 상황 방지
setTimeout(() => {
  if (!typingDone) {
    typing.dispatchEvent(new Event("animationend"))
  }
}, 3200) // typing animation 시간 + 여유

function createCards() {
  if (cardsCreated) return
  cards.innerHTML = ""
  cardData.forEach(({ title, content }) => {
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<h3>${title}</h3><p>${content}</p>`
    cards.appendChild(card)
  })
  cardsCreated = true
}

document.addEventListener("click", () => {
  if (!typingDone || cardsRevealed) return

  const cardList = document.querySelectorAll(".card")
  cardList.forEach((card, index) => {
    setTimeout(() => card.classList.add("show"), index * 200)
  })

  setTimeout(() => {
    enterBtn.classList.remove("hidden")
  }, cardList.length * 200 + 300)

  cardsRevealed = true
})
