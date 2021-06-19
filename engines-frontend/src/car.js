class Car {

  static allCars = []

  constructor(car) {

    this.id = car.id
    this.make = car.attributes.make
    this.model = car.attributes.model
    this.year = car.attributes.year
    this.trim = car.attributes.trim
    this.image_url = car.attributes.image_url

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
        image: imageInput.value
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

}

