const container = document.querySelector(".container");
const seat = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.querySelector("#movie");

// Select film

const ticketPrice = +movieSelect.value;
console.log(typeof ticketPrice);
// Add event listener
//  When I want to click on seats I want ot change the vclass to another ligt blue color
container.addEventListener("click", seatFunction);

function seatFunction(e) {
  // When you click , will show you which element you clicked!
  //console.log(e.target);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
}
