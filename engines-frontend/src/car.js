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
  

}

