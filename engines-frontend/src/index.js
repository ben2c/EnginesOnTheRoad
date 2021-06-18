const carsURL = 'http://localhost:3000/cars'

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