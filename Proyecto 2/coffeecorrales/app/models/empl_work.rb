class EmplWork < ApplicationRecord
  belongs_to :farmer
  belongs_to :user
  belongs_to :work
end
