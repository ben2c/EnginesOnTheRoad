class CarsController < ApplicationController

  def index
    cars = Car.all
    render json: CarSerializer.new(cars)
  end

  
  def create
      car = Car.new(car_params)
      if car.save
        render json: CarSerializer.new(car), status: :accepted 
      else
         render json: {errors: car.errors.full_messages}, status: :unprocessable_entity 
      end
  end
  
    def update
    respond_to do |format|
      if car.update(car_params)
        format.html { redirect_to car, notice: 'Car was successfully updated.' }
        format.json { render :show, status: :ok, location: car }
      else
        format.html { render :edit }
        format.json { render json: car.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    car = Car.find(params[:id])
    car.destroy
    
  end

  private
   
    def car_params
      params.require(:car).permit(:make, :model, :year, :trim, :image_url)
    end
end
