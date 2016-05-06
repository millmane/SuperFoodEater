User.create!(
  username: "guest",
  password: "password"
  )
words = File.readlines(File.dirname(__FILE__) + "/seed_words.txt")
words.map!(&:chomp)
# words.sample(50).join(" ").downcase!

Listing.create!(
  title: "Lime Chicken",
  description: "My wife loved this take on a delicious dish. Mince onion, garlic and jalepeno, add the dry ingredients called for in this dish to form a wet paste. Rub generous amounts under the skin. Outer skin is salted, rubbed with some mixture. Broil in oven until skin gets nice and crispy (5-7 min) switch oven to bake 350 until done (approx 40 min). About half way through squeeze lime juice on chicken.",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 22.37,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Creme Brulee",
  description: "I finally had the chance to try this renowned San Francisco-based creme brûlée cart after years of hoping it would conveniently pop up on my side of the East Bay--and thank GOD it did, because it was more satisfying than I ever expected.",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 6.83,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Onion Ring Burger and Fries",
  description: "Two strips of crispy New hickory-smoked bacon makes this thick and juicy burger even better. Topped with American cheese and served on a grilled bun with fresh lettuce, tomato and red onion.",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 12.54,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Loaf of Bread with Butter",
  description: "My families favorite recipe! I have been baking bread (2-4 loaves per week) for over a year and tried a variety of recipes, many a lot more complicated and this is the simplest.",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 4.75,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Bacon Cheeseburger",
  description: "Two strips of crispy New hickory-smoked bacon makes this thick and juicy burger even better. Topped with American cheese and served on a grilled bun with fresh lettuce, tomato and red onion.",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 9.99,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Porkchop with Caramelized Apples",
  description: "These were fabulous. My husband said they have usurped his old favorite for the best pork chops dish EVER! I made 6 chops but made enough sauce for 20. I sprinkled the chops w/ Paula Deen's house seasoning & sauteed them in butter & olive oil.",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 17.88,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Chocolate Cupcakes",
  description: "AMAZING!! I have been baking for a long time. it a passion of mine... let me tell you these cupcakes are deadly. i could not get enough. i was searching for a new chocolate cupcake recipe and i came across this one... i was a little hesitant at first, due to some of the reviews. but wow. almost tastes like a brownie",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 3.56,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Salted Pretzel",
  description: "The pretzel was considered a stereotypically German food, and the first known occurrences of the word pretzel in English date from the first half of the 1800s and are often found in descriptions of the German diet. Pretzel comes from a German word that is now spelled Brezel in modern standard German",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 2.22,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Blueberry Biscuits",
  description: "Does your breakfast usually consist of eggs and bacon or cold cereal and milk? Are you tired of eating the same ole food every single day? Why don’t you try your hand at eating these delicious blueberry biscuits",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 1.25,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Pepperoni and Black Olive Pizza",
  description: "I'm not the biggest fan of pizza but this pizza is something you don't find elsewhere. The pizza sauce has a distinct taste and the ingredients look and taste fresher than other places. The pizza is cooked so evenly and perfect",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 13.58,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Jelly Filled Donuts",
  description: "AMAZING donuts! I arrived at 7:45 on a Thursday morning and the donuts were fresh out. I ordered the french glaze and the chocolate donut filled with creamy goodness. The latter is probably the best donut I've ever eaten. Not only were the donuts mouth watering, the service was impeccable",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 2.79,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Waffle with Whipped Cream and Fruit",
  description: "The syrup and the hot sauce that came with the dish were a harmonious duo that kept me asking for more. The waffle was cooked perfectly as well as the chicken was fried. It was perfect. I had to share, so we got three plates. (Sharing is good though)",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 7.99,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Assorted Fruit",
  description: "This place is great! Just went there for the first time and I am amazed at what I got for my money. Incredible. Very friendly people and, again, what a bargain.",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 5.55,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Blueberry and Blackberry Pie",
  description: "Perfect. We found that this is a tart-sweet pie with the juices gelled just enough not to run out of the pie IF you use a lattice crust and very small fresh blueberries",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 11.75,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Cornflakes with Raisins",
  description: "Corn flakes are so well established and ubiquitous that it is fair to say that everyone is familiar with and has tasted it. So, my taste opinions may not be that valuable. Nevertheless, there is just one word that comes to mind when I eat Corn Flakes: delicious",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 5.05,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Clams in Lemon Sauce",
  description: "This was a fantastic simple fresh recipe. As an earlier reviewer suggested, I added a dash of oregano, a dash of red pepper flakes, and a medium can of diced tomatoes. The tomatoes were a great addition. Served it with pasta for a main dish (linguini). I'm making this for Christmas Eve with shrimp, yum!",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 18.99,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Charcuterie Board",
  description: "Charcuterie is part of the garde manger chef's repertoire. Originally intended as a way to preserve meat before the advent of refrigeration, they are prepared today for their flavors derived from the preservation processes",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 25.51,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Bowl of Ramen",
  description: "You're delivered a heaping bowl of thick, chewy noodles topped with large pieces of char siu pork, a slice of lime and a piece of seaweed. On the side, you receive a smaller bowl with the rich, thick, porky broth and seasoned boiled egg. Squeeze that lime over the noodles and dunk each bite into the broth! That flavorful broth with bits of char siu in it accompanied by the slight tang of the lime and bite of the noodles is heaven.",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 10.99,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Triple Chocolate Brownies",
  description: "Got a serious chocolate craving? These brownies will do the trick and leave you wishing you had room for more. They're intensely chocolately and so fudgy you almost need a spoon. You'll definitely need a glass of milk to wash them down!",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 9.99,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)

Listing.create!(
  title: "Stack of Pancakes",
  description: "For our sweet dish, we opted for pancakes. I 100% appreciated the fact that it wasn't delivered smothered in sweet sauces. It was just lightly dusted with powdered sugar and delivered with maple syrup on the side. This really allowed for us to pick up on the lemon flavor. Without a doubt, these pancakes were also amazingly cloud-like and a perfect choice for a sweet (but not too sweet) option!",
  host_id: 1,
  lat: Random.new.rand(37.753972..37.793972),
  lng: Random.new.rand(122.411297..122.451297) * -1,
  guests: 1,
  price: 11.11,
  from_date: DateTime.new(2001,2,3),
  to_date: DateTime.new(2001,4,5),
  home_type: "apartment",
  room_type: "private",
)


# lime chicken
Image.create!(
  listing_id: 1,
  url: "https://i.imgur.com/blbgF7k.jpg"
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
  url: "https://i.imgur.com/VguVWrN.jpg"
)

# ramen
Image.create!(
  listing_id: 18,
  url: "https://i.imgur.com/6LVzyAk.jpg"
)

# brownies
Image.create!(
  listing_id: 19,
  url: "https://i.imgur.com/lajGJuw.jpg"
)
# stack of pancakes
Image.create!(
  listing_id: 20,
  url: "https://i.imgur.com/VH9zxjl.jpg"
)
