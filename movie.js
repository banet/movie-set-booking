const container = document.querySelector(".container");
const seat = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.querySelector("#movie");
/**Selecting felt with movies */
//const movieSelect = document.querySelector("#movie");
//const ticketSelect = movieSelect.value;
//Turning to the number two ways:
// const ticketSelect = parseInt(movieSelect.value);, +movieSelect.value

// Select film
let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  //console.log(selectedSeatsCount);
  // console.log(selectedSeats);

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
//Choose movie
function chooseMovie(e) {
  ticketPrice = +e.target.value;
  updateSelectedCount();
}

function seatFunction(e) {
  // When you click , will show you which element you clicked!
  //console.log(e.target);
  //if you have the class "seat" and it is NOT occupead than run toggle('selected')
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  // Then go and update selected count
  updateSelectedCount();
}
// Update the count and price

// ADD EVENT LISTENER
// Seat  click event
//  When I want to click on seats I want ot change the vclass to another ligt blue color
container.addEventListener("click", seatFunction);
//container.addEventListener("click", updateSelectedCount);
// Movie select event
movieSelect.addEventListener("change", chooseMovie);
