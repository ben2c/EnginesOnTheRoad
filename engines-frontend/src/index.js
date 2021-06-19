const carsURL = 'http://localhost:3000/cars'
const reviewsURL = 'http://localhost:3000/reviews'
const carForm = document.getElementById("car-form")
const part = document.getElementById("part")
const makeInput = document.getElementById("input-make")
const modelInput = document.getElementById("input-model")
const yearInput = document.getElementById("input-year")
const trimInput = document.getElementById("input-trim")
const imageInput = document.getElementById("input-image_url")
const reviewsInput = document.getElementById("input-reviews")
const carList = document.getElementById("car-list")



part.addEventListener("DOMContentLoaded", function (x) {
  let arr = Car.allCars.filter(car => {
    for (let view of car.reviews) {
      if (view.make.toLowerCase().includes(x.target.value)) {
        return true
      }
    }
  })

  Car.renderCars(arr)
})