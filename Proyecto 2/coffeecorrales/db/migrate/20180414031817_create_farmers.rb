class CreateFarmers < ActiveRecord::Migration[5.1]
  def change
    create_table :farmers do |t|
      t.string :name
      t.string :address
      t.string :hectareas
      t.string :description

      t.timestamps
    end
    add_index :farmers, :name, unique: true
  end
end
