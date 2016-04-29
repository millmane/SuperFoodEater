class Api::ListingsController < ApplicationController


  def first_three
    @listings = Listing.all.includes(:images).take(3)
    render :index
  end

  def filter
    @listings = Listing.filter_by_params(params[:filter])
    render :index
  end

  def index
    @listings = current_user.listings.includes(:images)
  end
  #
  # def index
  # listings = Listing.all
  # if(bounds)
  #   listings = Listing.in_bounds(bounds)
  # end
  #   @listings = listings
  #   render 'index'
  # end
  def create
    params = listing_params

    params[:host_id] = current_user.id
    params[:to_date] = Time.at(room_params[:to_date].to_i)
    params[:from_date] =  Time.at(room_params[:from_date].to_i)

    @listing = Listing.create(params)
    render :show
  end

  def show
    @room = Room.find_by(id: room_params[:id])
  end

  def destroy
    @listing = Listing.find_by(id: params[:id])
    @listing.destroy!
  end

# def create
#   listing = Listing.create!(listing_params)
#   listing[:host_id] = current_user.id
#   render json: listing
# end

private

# def seating_range
#   (params[:minSeating]..params[:maxSeating])
# end

def listing_params
  params.require(:listing).permit(
    :lat,
    :lng,
    :description,
    # :seating
  )
end

def bounds
  params[:bounds]
end

end
