class CarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :make, :model, :year, :trim, :image_url, :reviews
end
