json.array! (@listings) do |listing|
  json.extract! listing, :id, :title, :description, :host_id, :lat, :lng, :guests
end
