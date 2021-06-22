class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :car_id, :car
end
