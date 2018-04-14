class EmplWorksController < ApplicationController
  before_action :set_empl_work, only: [:show, :update, :destroy]

  # GET /empl_works
  def index
    @empl_works = EmplWork.all

    render json: @empl_works
  end

  # GET /empl_works/1
  def show
    render json: @empl_work
  end

  # POST /empl_works
  def create
    @empl_work = EmplWork.new(empl_work_params)

    if @empl_work.save
      render json: @empl_work, status: :created, location: @empl_work
    else
      render json: @empl_work.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /empl_works/1
  def update
    if @empl_work.update(empl_work_params)
      render json: @empl_work
    else
      render json: @empl_work.errors, status: :unprocessable_entity
    end
  end

  # DELETE /empl_works/1
  def destroy
    @empl_work.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_empl_work
      @empl_work = EmplWork.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def empl_work_params
      params.require(:empl_work).permit(:farmer_id, :user_id, :work_id, :start_date, :end_date)
    end
end
