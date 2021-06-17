class Car < ApplicationRecord
  has_many :reviews, dependent: :destroy
end
