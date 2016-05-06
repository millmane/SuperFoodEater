# RotationsExchanger

###[Live link](foodeater.co)

FoodEater is a web application inspired by AirBnB that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

FoodEater is a web application designed for hungry people to easily list and search for food wherever they are. This full stack application is completed with Ruby on Rails and React.js. Inspiration for the application comes from [AirBnB](airbnb.com).

## Application Features

#### Dynamic filtering allowing users to mix and match compounded search parameters and receive instant updates
![filtered_search]

#### Vivid display of food photo, description, price, and map location.
![detail_view]

#### Complete single page application with authentication and instant error handling to provide a smooth user experience
![auth_feedback]
<p align="center">
  <img src="./screenshots/add_form_feedback.png"/>
</p>

[auth_feedback]: ./screenshots/auth_feedback.png
[detail_view]: ./screenshots/detail_view.png
[filtered_search]: ./screenshots/filtered_search.png

## Technical Features

###Stack
* Ruby on Rails
* React.js
* Postgresql

###Models Schema
* Users
* Listings
* Images

###APIs
* Google Maps API

###Modularized Components
React components are abstracted and grouped by logical similarity. This enables improved code maintainability and allows easy iterative design and development.

###Data Integrity
Integrated with React, the flux architecture provides real time reflection of all needed data from the database, allowing dynamic updates and minimal server requests.

## Todos
* Add a search bar feature with multiple parameters, such as location or cuisine type
* Add additional filter parameters
* Add a Account Details page
* Add ability to reserve a food item

## Future Features
* **Messaging model:** complete message history between guest and host for improved ease in foods/request management
* **Availability model:** multiple date ranges for each listing's available dates, allowing user to list with more flexibility
* **Favorites model:** save listings for future meals

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md
