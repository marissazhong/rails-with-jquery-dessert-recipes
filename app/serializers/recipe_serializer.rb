class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :prep_time, :cook_time, :ingredients, :directions
  belongs_to :user
  has_many :ingredients
end
