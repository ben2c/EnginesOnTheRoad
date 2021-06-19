class Car {

  static allCars = []

  constructor(car) {

    this.id = car.id
    this.make = car.attributes.make
    this.model = car.attributes.model
    this.year = car.attributes.year
    this.trim = car.attributes.trim
    this.image_url = car.attributes.image_url
    this.review = car.attributes.review

    Car.allCars.push(this)
    this.renderCar()

  }

  static renderCars(car) {

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
  
  static submitCar(car) {

    car.preventDefault()
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
        image: imageInput.value,
        review: reviewsInput.value
      })
    })
      .then(response => response.json())
      .then(car => {
        //let newCar = new Car(car.data)
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

  renderCar() {

    const carLi = document.createElement('li')

    carLi.dataset.id = this.id
    carList.appendChild(carLi)
    const h3 = document.createElement('h3')
    h3.className = ("card-header")
    h3.innerText = this.name
    const img = document.createElement('img')
    img.src = this.image
    img.width = 200
    const p = document.createElement('p')
    p.className = "card-text"
    p.innerText = this.review

    //delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn btn-primary btn-sm"
    deleteBtn.innerText = "Remove Car"
    deleteBtn.addEventListener("click", this.deleteCar)

    //review form
    const reviewForm = document.createElement('form')
    reviewForm.innerHTML += `<input type="text"  class="form-control" id="review-input" placeholder ="Review">
        <input type="submit" class="btn btn-primary btn-sm" value="Add">`


    reviewForm.addEventListener("submit", Review.createReview)

    const reviewList = document.createElement("ul")
    reviewList.className = "list-group list-group-flush"
    reviewList.dataset.id = this.id
    //rendering each review for a car

    this.reviews.forEach(review => {

      let newReview = new Review(review)

      newReview.renderReview(reviewList)
    })
    reviewLi.append(h3, img, reviewList, reviewForm, p, deleteBtn)
  
  }
}

