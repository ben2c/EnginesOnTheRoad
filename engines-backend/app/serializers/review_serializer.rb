class ReviewSerializer
  include JSONAPI::Serializer
  belongs_to :car
  attributes :title, :content, :car_id, :car
end
