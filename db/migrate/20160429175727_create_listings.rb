class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :host_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :guests, null: false

      t.timestamps null: false
    end
    add_index :listings, :host_id
    add_index :listings, :guests
    add_index :listings, :lat
    add_index :listings, :lng
  end
end
