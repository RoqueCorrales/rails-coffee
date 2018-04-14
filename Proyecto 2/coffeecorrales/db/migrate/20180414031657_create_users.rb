class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :name
      t.string :lastname
      t.integer :phone
      t.integer :age
      t.string :address
      t.boolean :admin
      t.string :auth_token
      t.string :password_digest

      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
