# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Reservation

### Controllers
* Api::ReservationsController (create, destroy, index, show, update)

### Views
* reservations/index.json.jbuilder
* reservations/show.json.jbuilder

## Flux
### Views (React Components)
* ReservationsIndex
  - ReservationIndexItem
* ReservationForm
* SearchIndex

### Stores
* Notebook

### Actions
* ApiActions.receiveAllNotebooks -> triggered by ApiUtil
* ApiActions.receiveSingleNotebook
* ApiActions.deleteNotebook
* NotebookActions.fetchAllNotebooks -> triggers ApiUtil
* NotebookActions.fetchSingleNotebook
* NotebookActions.createNotebook
* NotebookActions.editNotebook
* NotebookActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllNotebooks
* ApiUtil.fetchSingleNotebook
* ApiUtil.createNotebook
* ApiUtil.editNotebook
* ApiUtil.destroyNotebook

## Gems/Libraries
