User.create!(
  username: "guest",
  password: "password"
  )
words = File.readlines(File.dirname(__FILE__) + "/seed_words.txt")
words.map!(&:chomp)

Listing.create!(
  title: "Lime Chicken",
  description: "This dish can only be described as " + words.sample(50).join(" ").downcase!,
  host_id: 1,
  lat: Random.new.rand(37.763972..37.783972),
  lng: Random.new.rand(122.421297..122.441297) * -1,
  guests: 1,
  price: Faker::Commerce.price,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Charcuterie Board",
  description: "This dish can only be described as " + words.sample(50).join(" ").downcase!,
  host_id: 1,
  lat: Random.new.rand(37.763972..37.783972),
  lng: Random.new.rand(122.421297..122.441297) * -1,
  guests: 1,
  price: Faker::Commerce.price,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Bowl of Ramen",
  description: "This dish can only be described as " + words.sample(50).join(" ").downcase!,
  host_id: 1,
  lat: Random.new.rand(37.763972..37.783972),
  lng: Random.new.rand(122.421297..122.441297) * -1,
  guests: 1,
  price: Faker::Commerce.price,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Triple Chocolate Brownies",
  description: "This dish can only be described as " + words.sample(50).join(" ").downcase!,
  host_id: 1,
  lat: Random.new.rand(37.763972..37.783972),
  lng: Random.new.rand(122.421297..122.441297) * -1,
  guests: 1,
  price: Faker::Commerce.price,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Stack of Pancakes",
  description: "This dish can only be described as " + words.sample(50).join(" ").downcase!,
  host_id: 1,
  lat: Random.new.rand(37.763972..37.783972),
  lng: Random.new.rand(122.421297..122.441297) * -1,
  guests: 1,
  price: Faker::Commerce.price,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Image.create!(
  listing_id: 1,
  url: "http://i.imgur.com/blbgF7k.jpg"
)

Image.create!(
  listing_id: 1,
  url: "http://i.imgur.com/blbgF7k.jpg"
)

Image.create!(
  listing_id: 2,
  url: "http://i.imgur.com/VguVWrN.jpg"
)

Image.create!(
  listing_id: 3,
  url: "http://i.imgur.com/6LVzyAk.jpg"
)

Image.create!(
  listing_id: 4,
  url: "http://i.imgur.com/lajGJuw.jpg"
)
Image.create!(
  listing_id: 5,
  url: "http://i.imgur.com/VH9zxjl.jpg"
)
