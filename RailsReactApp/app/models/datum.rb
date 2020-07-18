class Datum < ApplicationRecord
  validates :name, presence:true
  validates :mail, presence:true
end
