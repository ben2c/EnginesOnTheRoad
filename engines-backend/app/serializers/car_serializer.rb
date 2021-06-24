class CarSerializer
  include FastJsonapi::ObjectSerializer
  has_many :reviews
  attributes :make, :model, :year, :trim, :image_url, :reviews
end
