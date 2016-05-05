  json.extract!(@listing,
   :id,
   :title,
   :description,
   :host_id,
   :lat,
   :lng,
   :guests,
   :price,
   :from_date,
   :to_date,
   :home_type,
   :room_type,)
   json.images @listing.images, :url, :listing_id, :id
