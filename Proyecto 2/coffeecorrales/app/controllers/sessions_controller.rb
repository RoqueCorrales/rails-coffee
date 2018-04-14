class SessionsController < ApplicationController
    skip_before_action :authenticate, only: [:create]
  
    def create
      if    user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
  
          render json: user.auth_token.to_json, status: 201
        else
          render json: user.errors, status: :unprocessable_entity
        end
      end
  
    end
  
    def destroy
      @data_session.destroy
      head :no_content
    end
  
  end