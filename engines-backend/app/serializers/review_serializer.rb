class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :content, :car_id, :car
end
