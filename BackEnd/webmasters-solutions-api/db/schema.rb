# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_03_22_232206) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "barns", force: :cascade do |t|
    t.integer "cost"
    t.string "roof"
    t.integer "l"
    t.integer "w"
    t.integer "h"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "buyer_id", null: false
    t.index ["buyer_id"], name: "index_barns_on_buyer_id"
  end

  create_table "buyers", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "phone"
    t.string "email"
    t.string "occupation"
    t.integer "amount_paid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "amount_owed"
    t.string "animals", default: [], array: true
    t.string "products", default: [], array: true
    t.string "status", default: "pending"
    t.string "origin", default: "google"
  end

  create_table "installs", force: :cascade do |t|
    t.string "installation_address"
    t.datetime "installation_date"
    t.bigint "kennel_id"
    t.bigint "buyer_id", null: false
    t.integer "worker_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "shade_id", null: false
    t.bigint "barn_id"
    t.index ["barn_id"], name: "index_installs_on_barn_id"
    t.index ["buyer_id"], name: "index_installs_on_buyer_id"
    t.index ["kennel_id"], name: "index_installs_on_kennel_id"
    t.index ["shade_id"], name: "index_installs_on_shade_id"
  end

  create_table "kennels", force: :cascade do |t|
    t.integer "cost"
    t.string "color"
    t.string "model_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shades", force: :cascade do |t|
    t.integer "cost"
    t.string "roof"
    t.integer "l"
    t.integer "w"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "h"
    t.bigint "buyer_id"
    t.index ["buyer_id"], name: "index_shades_on_buyer_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "barns", "buyers"
  add_foreign_key "installs", "barns"
  add_foreign_key "installs", "buyers"
  add_foreign_key "installs", "kennels"
  add_foreign_key "installs", "shades"
  add_foreign_key "shades", "buyers"
end
