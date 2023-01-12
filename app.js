const board = document.querySelector("#board")
const COUNT_BLOCK = 400
const colors = ["#e34c3c", "#6ee33d", "#3e44ad", "#4caaad", '#3455db', "#e67f22", "#2ddc71"]

for (let i = 0; i < COUNT_BLOCK; i++) {
    const block = document.createElement("div")
    block.className = "block"
    block.addEventListener("mouseenter", setColor)
    block.addEventListener("mouseleave", removeColor)
    board.append(block)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * (colors.length - 1))
    const color = colors[index]
    return color
}

function setColor() {
    const color = getRandomColor()
    block.style.backgroundColor = color
    block.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor() {
    block.style.backgroundColor = "#1d1d1d"
    block.style.boxShadow = `0 0 2px #000`
}