class Review {

  constructor(review) {

    this.id = review.id
    this.title = review.title
    this.content = review.content
    this.car_id = review.car_id

  }

  static createReview(x) {

    x.preventDefault()
    const li = document.createElement('li')
    const reviewTitle = x.target.children[0].value
    const reviewList = x.target.previousElementSibling
    const carId = x.target.parentElement.dataset.id

    Review.submitReview(reviewTitle, reviewList, carId)
    x.target.reset()

  }

  renderReview(reviewList) {

    const li = document.createElement('li')
    li.className = "list-group-item"
    li.dataset.id = this.id
    li.innerText = this.title

    const lnbr = document.createElement('br')
    const deleteBtn = document.createElement('button')
    deleteBtn.className = "badge badge-pill badge-primary"
    deleteBtn.innerText = "Remove"

    li.append(lnbr, deleteBtn)

    deleteBtn.addEventListener("click", this.deleteReview)
    reviewList.appendChild(li)

  }

  static submitReview(reviewTitle, reviewList, reviewContent, carId) {

    fetch(reviewsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        title: reviewTitle,
        car_id: carId,
        content: reviewContent,
        reviewList: reviewList
      })
    })
      .then(response => response.json())
      .then(review => {

        let newReview = new Review(review)

        const car = Review.allReviews.find(c => parseInt(c.id) === newReview.car_id)
        car.reviews.push(newReview)

        newReview.renderReview(reviewList)

      })
  }

  deleteReview() {

    const reviewId = this.parentElement.dataset.id
    fetch(`${reviewsURL}/${reviewId}`, {
      method: "DELETE"
    })

    this.parentElement.remove()
  }
}