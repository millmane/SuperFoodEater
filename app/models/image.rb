class Image < ActiveRecord::Base

  validates :listing_id, :url, presence: true

  belongs_to :listing

end
