const carsURL = 'http://localhost:3000/cars'
const reviewsURL = 'http://localhost:3000/reviews'
const carForm = document.getElementById("car-form")
const makeInput = document.getElementById("input-make")
const modelInput = document.getElementById("input-model")
const yearInput = document.getElementById("input-year")
const trimInput = document.getElementById("input-trim")
const imageInput = document.getElementById("input-image_url")


document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/cars';
  fetch(endPoint)
    .then(res => res.json())
    .then(json =>
      json.forEach(car => {
        const markup = `
        <li>
          <h3>${car.make}
            <button>Edit</button>
          </h3>
        </li>`;

        document.querySelector('#car-list').innerHTML += markup;
      })
    );
});