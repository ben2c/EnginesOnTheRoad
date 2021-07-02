class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    review = Review.new(review_params)
      if review.save
        render json: review
      else
        render json: {errors: review.errors.full_messages}, status: :unprocessable_entity 
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
  end

  private

    def review_params
      params.require(:review).permit(:title, :content, :car_id)
    end

end
