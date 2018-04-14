class CreateEmplWorks < ActiveRecord::Migration[5.1]
  def change
    create_table :empl_works do |t|
      t.references :farmer, foreign_key: true
      t.references :user, foreign_key: true
      t.references :work, foreign_key: true
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
