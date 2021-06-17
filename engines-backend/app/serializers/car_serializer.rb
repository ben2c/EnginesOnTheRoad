class CarSerializer
  include JSONAPI::Serializer
  has_many :reviews
  attributes :make, :model, :year, :trim, :image_url
end
