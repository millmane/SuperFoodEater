class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      @errors = ["not a valid user, session can't be created"]
      render "api/shared/error", status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      @errors = ['no one logged in']
      render "api/shared/error", status: 404
    end
  end

  def show
    # token = session[:session_token]
    # @user = User.find_by({session_token: token})
    # if @user
    #   response = {logged_in: true, username: @user.username}
    #   render json: response
    # else
    #   render json: { logged_in: false }
    # end
    if current_user
      @user = current_user
      render "api/users/show"
    else
      @errors = ["not a valid user, user can't be shown"]
      render "api/shared/error"
    end
  end

end
