
User.create!(
  username: "guest",
  password: "password"
  )

Listing.create!(
  title: "Listing1",
  description: "Description1",
  host_id: 1,
  lat: 1,
  lng: 1,
  guests: 1,
  price: 1,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Listing2",
  description: "Description2",
  host_id: 1,
  lat: 1,
  lng: 1,
  guests: 1,
  price: 1,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Listing3",
  description: "Description3",
  host_id: 1,
  lat: 1,
  lng: 1,
  guests: 1,
  price: 1,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Listing4",
  description: "Description4",
  host_id: 1,
  lat: 1,
  lng: 1,
  guests: 1,
  price: 1,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Listing5",
  description: "Description5",
  host_id: 1,
  lat: 1,
  lng: 1,
  guests: 1,
  price: 1,
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
