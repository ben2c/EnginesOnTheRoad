class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :car
  attributes :title, :content, :car_id, :car
end
