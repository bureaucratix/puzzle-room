class Api::V1::RiddlesController < ApplicationController


    before_action :find_riddle, only: [:update]
    def index
        @riddles = Riddle.all
        render json: @riddles
    end
    
    def update
        @riddle.update(riddle_params)
        if @riddle.save
        render json: @riddle, status: :accepted
        else
        render json: { errors: @riddle.errors.full_messages }, status: :unprocessible_entity
        end
        
    end
    
    private
    
    def riddle_params
        params.permit(:question, :answer)
    end
    
    def find_message
        @riddle = Riddle.find(params[:id])
    end
    
end
