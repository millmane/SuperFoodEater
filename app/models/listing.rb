class Listing < ActiveRecord::Base

  validates :description, :guests, :title, :lat, :lng, presence: true

  # def self.in_bounds(bounds)
  #   self.where("lat < ?", bounds[:northEast][:lat])
  #       .where("lat > ?", bounds[:southWest][:lat])
  #       .where("lng > ?", bounds[:southWest][:lng])
  #       .where("lng < ?", bounds[:northEast][:lng])
  # end


  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id

  def self.filter_by(filters)
    test = ""
    listings = []
    title_filter = ""
    title_query = ""
    title_value = ""
    guest_filter = ""
    filter_hash = Hash.new{ |h,k| h[k] = Array.new() }
    puts filters
    filters.each do |filter,value|
      case filter
      when :guests
        # guests_query = "guests ?"
        # guests_value = "0..#{value}"
        filter_hash[:query].push("guests <= ?")
        filter_hash[:guests_value] = "#{value}"
      when :bounds
        # lat: Float(bounds["southWest"]["lat"])...Float(bounds["northEast"]["lat"]),
   #     lng: Float(bounds["southWest"]["lng"])...Float(bounds["northEast"]["lng"])
        # bounds[sw][lat] = lat + 1,
        # bounds[sw][lng] = lng + 1,
        # bounds[ne][lat] = lat + 1,
        # bounds[ne][lng] = lat + 1,
        # sets bounds to a lat+50/lon+50 range

        # filter_hash[:query].push("lat => ?")
        # filter_hash[:lat_value] = Float(value["southWest"]["lat"])...Float(value["northEast"]["lat"])
        # filter_hash[:query].push("lng => ? ")
        # filter_hash[:lng_value] = Float(value["southWest"]["lng"])...Float(value["northEast"]["lng"])
        filter_hash[:query].push("lat BETWEEN ? AND ?")
        filter_hash[:lat_sw_value] = "#{value["southWest"]["lat"]}"
        filter_hash[:lat_ne_value] = "#{value["northEast"]["lat"]}"
        filter_hash[:query].push("lng BETWEEN ? AND ?")
        filter_hash[:lng_sw_value] = "#{value["southWest"]["lng"]}"
        filter_hash[:lng_ne_value] = "#{value["northEast"]["lng"]}"

      when :price_range
        # price_filter = "price #{value[0]}..#{value[1]}"
      when :title
        # title_query = "title LIKE ?"
        # title_value = "#{value}"
        filter_hash[:query].push("title LIKE ?")
        # filter_hash[:title_query] = "title"
        filter_hash[:title_value] = value
        # filter_hash[:title] = {query: "title LIKE ?", value: "#{value}"}
        # filter_hash[:title_query] = "title LIKE ?"
        # filter_hash[:title_value] = "#{value}"
        # title_filter = "title LIKE '#{value}'"
        # listings += Listing.filter_by_title(value)
      when :date_range
        # filter_hash[:query].push("date_range BETWEEN ? AND ?")
        # filter_hash[:date_from_value] = "#{value[from]}"
        # filter_hash[:date_to_value] = "#{value[to]}"


        #  def self.in_date_range(from_date, to_date)
        #    return self.all if (from_date.nil? && to_date.nil?)
        #
        #    booking_from = Time.at(from_date.to_i)
        #    booking_to = Time.at(to_date.to_i)
        #
        #    Room.includes(:images).where("from_date <= ? AND to_date >= ?", booking_from, booking_to)
        #  end
      when :room_type
        # filter_hash[:query].push("room_type = ?")
        # filter_hash[:room_type_value] = "#{value}"
      end

    end
    puts filter_hash
    # puts filter_hash[:query]
    puts filter_hash[:query] = filter_hash[:query].join(" AND ")
    # test = Listing.where('lat' => ?, 0...3)
    # puts test

    # return Listing.where(like + like1, value, value1)
    # return Listing.where("title LIKE ?", "%L%")
    # return Listing.where(title_query, title_value)
    return Listing.where(
      # filter_hash[:title][:query], filter_hash[:title][:value])
      # filter_hash[:title_query] => filter_hash[:title_value]
      filter_hash[:query],
      filter_hash[:guests_value],
      filter_hash[:lat_sw_value],
      filter_hash[:lat_ne_value],
      filter_hash[:lng_sw_value],
      filter_hash[:lng_ne_value],
      filter_hash[:title_value],
      )
    # return listings

    # in_id_range(filters[:id_range])
    # filter_keys = filters.keys
    # Listing.filter_by_title(filters[:title])
    # listings = Listing.where("title LIKE '#{filters[:title]}'")
    # return listings
  end

  # def self.in_bounds(bounds)
  #   return if bounds.nil? || bounds.empty?
  #
  #   Room.includes(:images).where(
  #     lat: Float(bounds["southWest"]["lat"])...Float(bounds["northEast"]["lat"]),
  #     lng: Float(bounds["southWest"]["lng"])...Float(bounds["northEast"]["lng"])
  #   )

  def self.filter_by_title(title)
    listings = Listing.where("title LIKE '#{title}'")
    return listings
  end

  # has_many :images, dependent: :destroy
  # has_many :bookings, dependent: :destroy

 #  def self.filter_by_params(params)
 #   #
 #   # return if params[:bounds].nil? || params[:bounds].empty?
 #   #
 #   # rooms_in_bounds = in_bounds(params[:bounds])
 #   #
 #   # if params[:home_types].empty? && params[:room_types].empty? && params[:date_range][:from_date].empty? && params[:date_range][:to_date].empty?
 #   #   return rooms_in_bounds.where(price: params[:price_range][0]..params[:price_range][1])
 #   # end
 #   #
 #   # room_in_bounds = room_in_bounds.
 #   #
 #   # booking_from = Time.zone.local(*(params[:date_range][:from_date]))
 #   # booking_to = Time.zone.local(*(params[:date_range][:to_date]))
 #   #
 #   # rooms_in_bounds.where(
 #   #   lat: Float(params[:bounds]["southWest"]["lat"])...Float(params[:bounds]["northEast"]["lat"]),
 #   #   lng: Float(params[:bounds]["southWest"]["lng"])...Float(params[:bounds]["northEast"]["lng"]),
 #   #   price: params[:price_range][0]..params[:price_range][1],
 #   #   home_type: params[:home_types],
 #   #   room_type: params[:room_types]
 #   # ).where(
 #   #   "from_date <= ? AND to_date >= ?", booking_from, booking_to
 #   # )
 #   in_bounds(params[:bounds]) &
 #   in_price_range(params[:price_range]) &
 #   checked_home_type(params[:home_types]) &
 #   checked_room_type(params[:room_types]) &
 #   in_date_range(params[:from_date], params[:to_date])
 # end

 # def self.in_bounds(bounds)
 #   return if bounds.nil? || bounds.empty?
 #
 #   Room.includes(:images).where(
 #     lat: Float(bounds["southWest"]["lat"])...Float(bounds["northEast"]["lat"]),
 #     lng: Float(bounds["southWest"]["lng"])...Float(bounds["northEast"]["lng"])
 #   )
 # end
 #
 #
 #  def self.in_price_range(price_range)
 #    return self.all if (price_range[0] == "0" && price_range[1] == "501")
 #
 #    Room.includes(:images).where(price: price_range[0]..price_range[1])
 #  end
 #
 #  def self.checked_home_type(home_types)
 #    return self.all if home_types.nil? || home_types.empty?
 #    Room.includes(:images).where(home_type: home_types)
 #  end
 #
 #  def self.checked_room_type(room_types)
 #    return self.all if room_types.nil? || room_types.empty?
 #    Room.includes(:images).where(room_type: room_types)
 #  end
 #
 #  def self.in_date_range(from_date, to_date)
 #    return self.all if (from_date.nil? && to_date.nil?)
 #
 #    booking_from = Time.at(from_date.to_i)
 #    booking_to = Time.at(to_date.to_i)
 #
 #    Room.includes(:images).where("from_date <= ? AND to_date >= ?", booking_from, booking_to)
 #  end

end
