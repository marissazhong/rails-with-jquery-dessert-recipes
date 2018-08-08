class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :prep_time, :cook_time, :directions
  belongs_to :user
  has_many :ingredients_recipes
end
