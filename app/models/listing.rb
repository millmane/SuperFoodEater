class Listing < ActiveRecord::Base

  validates(
    :title,
    :description,
    :host_id,
    :guests,
    :lat,
    :lng,
    :guests,
    :price,
    :from_date,
    :to_date,
    :home_type,
    :room_type,
    presence: true
    )

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

        filter_hash[:query].push("guests <= ?")
        filter_hash[:guests_value] = "#{value}"
      when :bounds

        filter_hash[:query].push("lat BETWEEN ? AND ?")
        filter_hash[:lat_sw_value] = "#{value["southWest"]["lat"]}"
        filter_hash[:lat_ne_value] = "#{value["northEast"]["lat"]}"
        filter_hash[:query].push("lng BETWEEN ? AND ?")
        filter_hash[:lng_sw_value] = "#{value["southWest"]["lng"]}"
        filter_hash[:lng_ne_value] = "#{value["northEast"]["lng"]}"

      when :price_range
      when :title
        filter_hash[:query].push("title LIKE ?")
        filter_hash[:title_value] = value

      when :date_range

      when :room_type
      end

    end
    puts filter_hash
    puts filter_hash[:query] = filter_hash[:query].join(" AND ")

    return Listing.where(
      filter_hash[:query],
      filter_hash[:guests_value],
      filter_hash[:lat_sw_value],
      filter_hash[:lat_ne_value],
      filter_hash[:lng_sw_value],
      filter_hash[:lng_ne_value],
      filter_hash[:title_value],
      )

  end

  def self.filter_by_title(title)
    listings = Listing.where("title LIKE '#{title}'")
    return listings
  end

end
