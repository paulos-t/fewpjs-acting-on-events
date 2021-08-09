// Your code here

const dodger = document.querySelector('div#dodger')

function moveDodgerLeft() {
    let leftPosition = parseInt(dodger.style.left.replace("px", ""))
    if (leftPosition > 0) {
        dodger.style.left = `${leftPosition - 10}px`
    }
}

function moveDodgerRight() {
    let rightPosition = parseInt(dodger.style.left.replace("px", ""))
    if (rightPosition < 360) {
        dodger.style.left = `${rightPosition + 10}px`
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    else if (event.key === "ArrowRight") {
        moveDodgerRight()
    }
})