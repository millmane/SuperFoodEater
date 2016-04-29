class Listing < ActiveRecord::Base

  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end


  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id

  has_many :images, dependent: :destroy
  has_many :bookings, dependent: :destroy

  def self.filter_by_params(params)
   #
   # return if params[:bounds].nil? || params[:bounds].empty?
   #
   # rooms_in_bounds = in_bounds(params[:bounds])
   #
   # if params[:home_types].empty? && params[:room_types].empty? && params[:date_range][:from_date].empty? && params[:date_range][:to_date].empty?
   #   return rooms_in_bounds.where(price: params[:price_range][0]..params[:price_range][1])
   # end
   #
   # room_in_bounds = room_in_bounds.
   #
   # booking_from = Time.zone.local(*(params[:date_range][:from_date]))
   # booking_to = Time.zone.local(*(params[:date_range][:to_date]))
   #
   # rooms_in_bounds.where(
   #   lat: Float(params[:bounds]["southWest"]["lat"])...Float(params[:bounds]["northEast"]["lat"]),
   #   lng: Float(params[:bounds]["southWest"]["lng"])...Float(params[:bounds]["northEast"]["lng"]),
   #   price: params[:price_range][0]..params[:price_range][1],
   #   home_type: params[:home_types],
   #   room_type: params[:room_types]
   # ).where(
   #   "from_date <= ? AND to_date >= ?", booking_from, booking_to
   # )
   in_bounds(params[:bounds]) &
   in_price_range(params[:price_range]) &
   checked_home_type(params[:home_types]) &
   checked_room_type(params[:room_types]) &
   in_date_range(params[:from_date], params[:to_date])
 end

 def self.in_bounds(bounds)
   return if bounds.nil? || bounds.empty?

   Room.includes(:images).where(
     lat: Float(bounds["southWest"]["lat"])...Float(bounds["northEast"]["lat"]),
     lng: Float(bounds["southWest"]["lng"])...Float(bounds["northEast"]["lng"])
   )
 end


  def self.in_price_range(price_range)
    return self.all if (price_range[0] == "0" && price_range[1] == "501")

    Room.includes(:images).where(price: price_range[0]..price_range[1])
  end

  def self.checked_home_type(home_types)
    return self.all if home_types.nil? || home_types.empty?
    Room.includes(:images).where(home_type: home_types)
  end

  def self.checked_room_type(room_types)
    return self.all if room_types.nil? || room_types.empty?
    Room.includes(:images).where(room_type: room_types)
  end

  def self.in_date_range(from_date, to_date)
    return self.all if (from_date.nil? && to_date.nil?)

    booking_from = Time.at(from_date.to_i)
    booking_to = Time.at(to_date.to_i)

    Room.includes(:images).where("from_date <= ? AND to_date >= ?", booking_from, booking_to)
  end

end
