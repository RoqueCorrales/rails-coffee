class CreateProductions < ActiveRecord::Migration[5.1]
  def change
    create_table :productions do |t|
      t.integer :semana
      t.integer :cajuelas
      t.references :user, foreign_key: true
      t.references :farmer, foreign_key: true
      t.date :date

      t.timestamps
    end
  end
end
