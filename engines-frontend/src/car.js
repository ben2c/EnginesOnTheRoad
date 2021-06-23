class Car {

  static allCars = []

  constructor(car) {

    this.id = car.id
    this.make = car.attributes.make
    this.model = car.attributes.model
    this.year = car.attributes.year
    this.trim = car.attributes.trim
    this.image_url = car.attributes.image_url
    this.reviews = car.attributes.reviews

    Car.allCars.push(this)
    this.renderCar()

  }

  static renderCars(cars) {

    carList.innerHTML = ""
    for (let car of cars) {
      car.renderCar()
    }

  }

  static fetchCars() {

    fetch(carsURL)
    .then(response => response.json())
    .then(cars => {
      for (let car of cars.data) {
        let newCarList = new Car(car)
      }
    })

  }

  renderCar() {

    const carList = document.getElementById("car-list")
    const carLi = document.createElement('li')

    carLi.dataset.id = this.id
    carList.appendChild(carLi)
    const h3 = document.createElement('h3')
    h3.className = ("card-header")
    h3.innerText = this.make + " " + this.model + " " + this.year
    const p = document.createElement('p')
    p.className = "card-text"
    p.innerText = this.trim
    const img = document.createElement('img')
    img.src = this.image_url
    img.width = 200

    //delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn btn-primary btn-sm"
    deleteBtn.innerText = "Remove Car"
    deleteBtn.addEventListener("click", this.deleteCar)

    //review form
    const reviewForm = document.createElement('form')
    reviewForm.innerHTML += `
        <input type="text"  class="form-control" id="review-input" placeholder ="Title">
        <input type="text"  class="form-control" id="content-input" placeholder ="Content">
        <input type="submit" class="btn btn-primary btn-sm" value="Add Review">`


    reviewForm.addEventListener("submit", Review.createReview)

    const reviewList = document.createElement("ul")
    reviewList.className = "review-list-group"
    reviewList.dataset.id = this.id

    //rendering each review for a car
    this.reviews.forEach(review => {

      let newReview = new Review(review)

      newReview.renderReview(reviewList)
    })
    carLi.append(h3, p, img, reviewList, reviewForm, deleteBtn)

  }

  static submitCar(x) {

    x.preventDefault()
    fetch(carsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        make: makeInput.value,
        model: modelInput.value,
        year: yearInput.value,
        trim: trimInput.value,
        image_url: imageInput.value
      })
    })
      .then(response => response.json())
      .then(car => {
        let newCar = new Car(car.data)
        carForm.reset()
      })
  }

  deleteCar() {

    const carId = this.parentElement.dataset.id

    fetch(`${carsURL}/${carId}`, {
      method: "DELETE"
    })
    this.parentElement.remove()

  }

}

