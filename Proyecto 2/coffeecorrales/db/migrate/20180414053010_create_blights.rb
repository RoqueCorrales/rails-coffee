class CreateBlights < ActiveRecord::Migration[5.1]
  def change
    create_table :blights do |t|
      t.string :treatment
      t.string :description
      t.date :date
      t.references :farmer, foreign_key: true

      t.timestamps
    end
  end
end
