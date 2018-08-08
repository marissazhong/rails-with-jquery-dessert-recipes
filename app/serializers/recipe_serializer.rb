class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :prep_time, :cook_time
  belongs_to :user
end
