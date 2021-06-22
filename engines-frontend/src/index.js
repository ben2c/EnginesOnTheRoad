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
const part = document.getElementById("part")

part.addEventListener("change", function (x) {
  let arr = Car.allCars.filter(car => {
    for (let view of car.reviews) {
      if (view.title.toLowerCase().includes(x.target.value)) {
        return true
      }
    }
  })

  Car.renderCars(arr)
})

searchBar.addEventListener("keyup", function (x) {
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