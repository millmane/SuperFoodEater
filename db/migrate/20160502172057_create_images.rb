class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :listing_id, null: false
      t.string :url, null: false

      t.timestamps null: false
    end

    add_index :images, :listing_id
  end
end
