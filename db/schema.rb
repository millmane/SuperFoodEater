# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160502172057) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.integer  "listing_id", null: false
    t.string   "url",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "images", ["listing_id"], name: "index_images_on_listing_id", using: :btree

  create_table "listings", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "description", null: false
    t.integer  "host_id",     null: false
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.integer  "guests",      null: false
    t.float    "price",       null: false
    t.datetime "from_date",   null: false
    t.datetime "to_date",     null: false
    t.string   "home_type",   null: false
    t.string   "room_type",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "listings", ["guests"], name: "index_listings_on_guests", using: :btree
  add_index "listings", ["host_id"], name: "index_listings_on_host_id", using: :btree
  add_index "listings", ["lat"], name: "index_listings_on_lat", using: :btree
  add_index "listings", ["lng"], name: "index_listings_on_lng", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
