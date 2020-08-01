const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
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

//Populate UI
populateUI();
// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}
// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  //console.log(selectedSeatsCount);
  // console.log(selectedSeats);
  // Process: 1. Copy selected seats, 2. Map through array, 3. retturn a new array indexes usin spread operator
  // const seatIndex = [...selectedSeats].map(function (seat) {
  //   return [...seats].indexOf(seat);
  // });
  // Short way to write setIndex function
  const seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  // LOCLA STORAGE -JSON.stringify -> convert elements to string
  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));
  // console.log(seatIndex);

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
  // JSON.parse
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  console.log(selectedSeats);
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach(function (seat, index) {
      // if it not there->selected seats ( indexOf(index)>-1) than we wil give you color Blue!
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  // Saving movies to lacalStorage
  const selectedMovieIndex = localStorage.getItem(selectedMovieIndex);
  // If selected movie index is not in localstorage, then we wil take movieSelectIndex and set the selected index to whatever selectedMindex is
  if (selectedMovieIndex !== 0) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//Choose movie
function chooseMovie(e) {
  ticketPrice = +e.target.value;
  // With function setMovieData we wil save movie selected values in local storage
  setMovieData(e.target.selectedIndex, e.target.value);
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
