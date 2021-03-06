class FarmersController < ApplicationController
  before_action :set_farmer, only: [:show, :update, :destroy]
  skip_before_action :authenticate, only: [:create, :index]

  # GET /farmers
  def index
    @farmers = Farmer.all

    render json: @farmers
  end

  # GET /farmers/1
  def show
    render json: @farmer
  end

  # POST /farmers
  def create
    @farmer = Farmer.new(farmer_params)

    if @farmer.save
      render json: @farmer, status: :created, location: @farmer
    else
      render json: @farmer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /farmers/1
  def update
    if @farmer.update(farmer_params)
      render json: @farmer
    else
      render json: @farmer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /farmers/1
  def destroy
    @farmer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_farmer
      @farmer = Farmer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def farmer_params
      params.require(:farmer).permit(:name, :address, :hectareas, :description)
    end
end
