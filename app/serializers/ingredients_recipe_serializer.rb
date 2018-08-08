class IngredientsRecipeSerializer < ActiveModel::Serializer
  attributes :ingredient_id, :recipe_id, :input_name, :quantity
  belongs_to :recipe
end
