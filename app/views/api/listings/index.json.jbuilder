json.array! (@listings) do |listing|
  json.extract! listing, :title, :description, :host_id, :lat, :lng, :guests
end
