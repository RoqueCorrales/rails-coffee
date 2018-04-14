class BlightsController < ApplicationController
  before_action :set_blight, only: [:show, :update, :destroy]

  # GET /blights
  def index
    @blights = Blight.all

    render json: @blights
  end

  # GET /blights/1
  def show
    render json: @blight
  end

  # POST /blights
  def create
    @blight = Blight.new(blight_params)

    if @blight.save
      render json: @blight, status: :created, location: @blight
    else
      render json: @blight.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blights/1
  def update
    if @blight.update(blight_params)
      render json: @blight
    else
      render json: @blight.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blights/1
  def destroy
    @blight.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blight
      @blight = Blight.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def blight_params
      params.require(:blight).permit(:treatment, :description, :date, :farmer_id)
    end
end
