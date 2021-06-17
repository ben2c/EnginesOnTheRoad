class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: review
  end

  def create
    review = Review.new(review_params)
      if review.save
       render json: review
      else
        render json: {errors: review.errors.full_messages}, status: :unprocessable_entity 
    end
  end

  def update
    respond_to do |format|
      if @review.update(review_params)
        format.html { redirect_to @review, notice: 'Review was successfully updated.' }
        format.json { render :show, status: :ok, location: @review }
      else
        format.html { render :edit }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
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
