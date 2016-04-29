class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :host_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.date :check_in, null: false
      t.date :check_out, null: false
      t.integer :guests, null: false

      t.timestamps null: false
    end
    add_index :listings, :host_id, unique: true
    add_index :listings, :check_in, unique: true
    add_index :listings, :check_out, unique: true
    add_index :listings, :guests, unique: true

  end
end
