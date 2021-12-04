const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const serviceSelect = document.getElementById('service')
let ticketPrice = +serviceSelect.value

//  Business and Extra Cost
function addCost() {

}
// Save Service and Price
function setServiceData(serviceIndex, servicePrice) {
    localStorage.setItem('selectedServiceIndex', serviceIndex)
    localStorage.setItem('selectedServicePrice', servicePrice)
}

// Update count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].idexOf(seat))
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex))
    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice
}

// Service Click
serviceSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    setServiceData(e.target.selectedIndex, e.target.value)
    updateSelectedCount()
})

// Seat click
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})

// Countdown
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
