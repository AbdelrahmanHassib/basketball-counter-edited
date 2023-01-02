homeCount = 0
guestCount = 0

function add1Home() {
    homeCount+=1
    document.getElementById("home").textContent = homeCount
}

function add2Home() {
    homeCount+=2
    document.getElementById("home").textContent = homeCount
}

function add3Home() {
    homeCount+=3
    document.getElementById("home").textContent = homeCount
}

function add1Guest() {
    guestCount+=1
    document.getElementById("guest").textContent = guestCount
}

function add2Guest() {
    guestCount+=2
    document.getElementById("guest").textContent = guestCount
}

function add3Guest() {
    guestCount+=3
    document.getElementById("guest").textContent = guestCount
}

function newGame() {
    homeCount = 0
    guestCount = 0
    document.getElementById("home").textContent = homeCount
    document.getElementById("guest").textContent = guestCount
}