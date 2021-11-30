const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const serviceSelect = document.getElementById('service')
let ticketPrice = +serviceSelect.value

// Update count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice
}

// Service Click
serviceSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    updateSelectedCount()
})

// Seat click
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})

//  Business and Extra space seats Color change
function addCost() {

}

// countdown
const startingMinutes = 20;
let time = startingMinutes * 60;
const countdown = document.getElementById('countdown');
setInterval(updateCountdown, 1000)
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds
    countdown.innerHTML = `${minutes} : ${seconds}`;
    time--
}
