class CreateWorks < ActiveRecord::Migration[5.1]
  def change
    create_table :works do |t|
      t.string :name
      t.string :description
      t.integer :number_of_employees

      t.timestamps
    end
    add_index :works, :name, unique: true
  end
end
