const carsURL = 'http://localhost:3000/cars'
const reviewsURL = 'http://localhost:3000/reviews'
const carForm = document.getElementById("car-form")
const makeInput = document.getElementById("input-make")
const modelInput = document.getElementById("input-model")
const yearInput = document.getElementById("input-year")
const trimInput = document.getElementById("input-trim")
const imageInput = document.getElementById("input-image_url")
const carList = document.getElementById("car-list")
const searchBar = document.getElementById("searchBar")
const rating = document.getElementById("rating")


searchBar.addEventListener("DOMContentLoaded", function (x) {
  const searchInput = x.target.value.toLowerCase()
  const searchResult = Car.allCars.filter(car => {

    if (car.make.toLowerCase().includes(searchInput)) {
      return true

    }
  })

  Car.renderCars(searchResult)
})

carForm.addEventListener("submit", Car.submitCar)

Car.fetchCars()

//error checking
var myTextbox = document.getElementById('input-year');
myTextbox.addEventListener('keypress', checkYear, false);

function checkYear(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 48 || charCode > 57) {
      evt.preventDefault();
      displayWarning(
        "Please use numbers only."
        + "\n" + "charCode: " + charCode + "\n"
      );
    }
  }
}

//error display
var warningTimeout;
var warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = window.setTimeout(function () {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}