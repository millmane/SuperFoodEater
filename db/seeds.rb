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
  title: "Creme Brulee",
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
  title: "Onion Ring Burger and Fries",
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
  title: "Loaf of Bread with Butter",
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
  title: "Bacon Cheeseburger",
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
  title: "Porkchop with Caramelized Apples",
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
  title: "Chocolate Cupcakes",
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
  title: "Salted Pretzel",
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
  title: "Blueberry Biscuits",
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
  title: "Pepperoni and Black Olive Pizza",
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
  title: "Jelly Filled Donuts",
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
  title: "Waffle with Whipped Cream and Fruit",
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
  title: "Assorted Fruit",
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
  title: "Blueberry and Blackberry Pie",
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
  title: "Cornflakes with Raisins",
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
  title: "Clams in Lemon Sauce",
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


# lime chicken
Image.create!(
  listing_id: 1,
  url: "http://i.imgur.com/blbgF7k.jpg"
)

# creme brule
Image.create!(
  listing_id: 2,
  url: "https://images.unsplash.com/photo-1432139438709-ee8369449944?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# onionring burger and fries
Image.create!(
  listing_id: 3,
  url: "https://images.unsplash.com/photo-1432752641289-a25fc853fceb?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# loaf of bread
Image.create!(
  listing_id: 4,
  url: "https://images.unsplash.com/photo-1441122365457-1ae2aba6235c?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# bacon cheeseburger
Image.create!(
  listing_id: 5,
  url: "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# porkchop
Image.create!(
  listing_id: 6,
  url: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# cupcakes
Image.create!(
  listing_id: 7,
  url: "https://images.unsplash.com/photo-1426869884541-df7117556757?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# pretzel
Image.create!(
  listing_id: 8,
  url: "https://images.unsplash.com/photo-1454872442736-d1126f56be8a?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# biscuits
Image.create!(
  listing_id: 9,
  url: "https://images.unsplash.com/photo-1449792893722-936641bb3309?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# pizza
Image.create!(
  listing_id: 10,
  url: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# jelly donut
Image.create!(
  listing_id: 11,
  url: "https://images.unsplash.com/photo-1422919869950-5fdedb27cde8?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# waffle
Image.create!(
  listing_id: 12,
  url: "https://images.unsplash.com/photo-1459789034005-ba29c5783491?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# fruit
Image.create!(
  listing_id: 13,
  url: "https://images.unsplash.com/photo-1453179592584-e2587867cfff?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# berry pie
Image.create!(
  listing_id: 14,
  url: "https://images.unsplash.com/photo-1459663561442-984db4f334e8?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# cornflakes
Image.create!(
  listing_id: 15,
  url: "https://images.unsplash.com/photo-1450368588160-81c4b8955c8c?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# clams
Image.create!(
  listing_id: 16,
  url: "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1925"
)

# charcuterie board
Image.create!(
  listing_id: 17,
  url: "http://i.imgur.com/VguVWrN.jpg"
)

# ramen
Image.create!(
  listing_id: 18,
  url: "http://i.imgur.com/6LVzyAk.jpg"
)

# brownies
Image.create!(
  listing_id: 19,
  url: "http://i.imgur.com/lajGJuw.jpg"
)
# stack of pancakes
Image.create!(
  listing_id: 20,
  url: "http://i.imgur.com/VH9zxjl.jpg"
)
