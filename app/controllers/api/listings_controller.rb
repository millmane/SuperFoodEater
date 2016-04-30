class Api::ListingsController < ApplicationController

  #
  # def first_three
  #   @listings = Listing.all.includes(:images).take(3)
  #   render :index
  # end
  #
  # def filter
  #   @listings = Listing.filter_by_params(params[:filter])
  #   render :index
  # end

  # def index
  #   @listings = current_user.listings.includes(:images)
  # end
  #
  def index
    listings = Listing.all
  # if(bounds)
  #   listings = Listing.in_bounds(bounds)
  # end
    @listings = listings
    render 'api/listings/index'
  end

  # def create
  #   params = listing_params
  #
  #   params[:host_id] = current_user.id
  #   params[:to_date] = Time.at(room_params[:to_date].to_i)
  #   params[:from_date] =  Time.at(room_params[:from_date].to_i)
  #
  #   @listing = Listing.create(params)
  #   render :show
  # end

  def show
    @listing = Listing.find_by(id: params[:id])
    render 'api/listings/show'
  end

  def create

    @listing = Listing.new(listing_params)
    @listing.host_id = current_user.id
    @listing.save

    render json: @listing
    # render 'api/listings/show' - equivalent to above in this case
  end

  def destroy
    @listing = Listing.find_by(id: params[:id])
    @listing.destroy!
  end


private

# def seating_range
#   (params[:minSeating]..params[:maxSeating])
# end

def listing_params
  params.require(:listing).permit(
    :lat,
    :lng,
    :description,
    :title,
    :guests
  )
end

def bounds
  params[:bounds]
end

end
