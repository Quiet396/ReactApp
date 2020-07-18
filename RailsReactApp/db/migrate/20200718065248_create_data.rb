class CreateData < ActiveRecord::Migration[6.0]
  def change
    create_table :data do |t|
      t.text :name
      t.text :mail

      t.timestamps
    end
  end
end
