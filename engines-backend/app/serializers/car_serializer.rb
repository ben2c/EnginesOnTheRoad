class CarSerializer
  include JSONAPI::Serializer
  attributes :make, :model, :year, :trim, :image_url, :reviews
end
