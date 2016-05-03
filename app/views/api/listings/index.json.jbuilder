json.array! (@listings) do |listing|
  # json.extract! listing, :id, :title, :description, :host_id, :lat, :lng, :guests
  json.extract! listing,
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
   :room_type

   json.images listing.images, :url, :listing_id, :id

   #
  #  json.images
  #   json.array! (listing.images) do |image|
  #     json.extract! image, :url, :listing_id
  #  end
end
#
# json.array! (@listings) do |listing|
#
#
# end
