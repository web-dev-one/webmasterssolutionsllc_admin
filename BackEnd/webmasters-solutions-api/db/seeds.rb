# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Buyer.create!([{ name: "Joe Doe", email: "faker@fake.com", address: "555 Fake St, phoenix AZ, 85020", phone: "5555555555", model: "box kennel", price: 4100}, 
    {name: "Jace Eue", email: "faker2@fake.com", address: "1555 Faux St, phoenix AZ, 85020", phone: "5555555555", model: "side yard kennel", price: 3100}
    ])

Shade.create!({buyer_id: Buyer.first.id, cost: 15000, roof: "light stone", w: 10, l: 10, h: 15})

Install.create!({ buyer_id: Buyer.first.id, shade_id: Shade.first.id, installation_address: "2959 E Brown Rd, Mesa, AZ", installation_date: Date.tomorrow, worker_count: 3})