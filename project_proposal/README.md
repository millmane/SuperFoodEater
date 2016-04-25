# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

SuperFoodEater is a web application inspired by AirBnB that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an AirBnB-inspired site: reservation creation, saving, and editing
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

SuperFoodEater will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, read, edit, and delete Reservations (MVP)
- [ ] Create, read, edit, and delete Listings (MVP)
- [ ] Search/Filter for Listings by Date/Room Type/Price Range (MVP)
- [ ] See Listings on Google Map (MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Listings Model, API, and basic APIUtil (1.5 days)

**Objective:** Listings can be created, read, edited and destroyed through
the API.  Listings has many Reservations, belongs to User

- [ ] create `Listing` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for listings (`ListingsController`)
- [ ] jBuilder views for listings
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Listings can be created, read, edited and destroyed with the user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each listing component, building out the flux loop as needed.
  - [ ] `ListingsIndex`
  - [ ] `ListingIndexItem`
  - [ ] `ListingFilterForm`
    - [ ] `DateFilterForm`
    - [ ] `RoomTypeFilterForm`
    - [ ] `PriceRangeFilterForm`

### Phase 4: Start Styling (1 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Reservations (1 day)

**Objective:** Reservations belong to Listings and User

- [ ] create `Reservation` model
- build out API, Flux loop, and components for:
  - [ ] Reservation CRUD
  - [ ] viewing reservations by listing
  - [ ] viewing reservations by user

- Use CSS to style new views

### Phase 6: Google Maps (1.5 days)

**Objective:** Implement Google Maps API on ReservationDetail and ListingIndex

- [ ] Draggable map
- [ ] Markers on map
- [ ] Filtering by map location

### Bonus Features (TBD)
- [ ] Add custom Google Map markers
- [ ] Pagination / infinite scroll for Listings Index
- [ ] Hovering over an index highlights marker on map

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
