class Api::V1::UsersController < ApplicationController
    before_action :find_user, only: [:update]
    def index
      @users = User.all
      render json: @users
    end
   
    def update
      @user.update(user_params)
      if @user.save
        render json: @user, status: :accepted
      else
        render json: { errors: @user.errors.full_users }, status: :unprocessible_entity
      end
      
    end

    def create 
      @user = User.find_or_create_by(name: user_params["name"])
      render json: @user, status: :accepted
    end 

    private
   
    def user_params
      params.require(:user).permit(:riddle_complete, :chess_complete, :math_complete, :drag_complete, :found_complete, :whiteboard_complete, :name)
    end
   
    def find_user
      @user = User.find(params[:id])
    end
  end