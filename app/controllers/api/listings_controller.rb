require 'date'
class Api::ListingsController < ApplicationController

  def index


    listings = Listing.all
    if(bounds)
      listings = Listing.in_bounds(bounds)
    end

    if listings
      @listings = listings
      render 'api/listings/index', status: 200
    else
      @errors = listings.errors.full_messages
      render "api/shared/error", status: 400
    end
  end

  def show

    @listing = Listing.find_by(id: params[:id])
    render 'api/listings/show'
  end

  def create

    @listing = Listing.new(listing_params)
    @listing.host_id = current_user.id
    @listing.save

    render json: @listing
  end

  def destroy
    @listing = Listing.find_by(id: params[:id])
    @listing.destroy!
  end


  private

  def listing_params
    params.require(:listing).permit(
      :lat,
      :lng,
      :description,
      :title,
      :guests,
    )
  end

  def bounds
    params[:bounds]
  end

end
