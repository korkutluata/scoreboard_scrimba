let homeScore = 0
let guestScore = 0

function homeAdd1() {
  homeScore += 1
  document.getElementById("home-score").textContent = homeScore
}

function homeAdd2() {
  homeScore += 2
  document.getElementById("home-score").textContent = homeScore
}

function homeAdd3() {
  homeScore += 3
  document.getElementById("home-score").textContent = homeScore
}

function homeMinus1() {
  homeScore -= 1
  document.getElementById("home-score").textContent = homeScore
}

function homeMinus2() {
  homeScore -= 2
  document.getElementById("home-score").textContent = homeScore
}

function homeMinus3() {
  homeScore -= 3
  document.getElementById("home-score").textContent = homeScore
}

function guestAdd1() {
  guestScore += 1
  document.getElementById("guest-score").textContent = guestScore
}

function guestAdd2() {
  guestScore += 2
  document.getElementById("guest-score").textContent = guestScore
}

function guestAdd3() {
  guestScore += 3
  document.getElementById("guest-score").textContent = guestScore
}

function guestMinus1() {
  guestScore -= 1
  document.getElementById("guest-score").textContent = guestScore
}

function guestMinus2() {
  guestScore -= 2
  document.getElementById("guest-score").textContent = guestScore
}

function guestMinus3() {
  guestScore -= 3
  document.getElementById("guest-score").textContent = guestScore
}

function resetAll() {
  document.getElementById("home-score").textContent = 0
  document.getElementById("guest-score").textContent = 0
}