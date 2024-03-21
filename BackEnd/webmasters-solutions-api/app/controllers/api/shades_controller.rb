class Api::ShadesController < ApplicationController
  def index
    shades = Shade.all
    render json: shades, status:200
  end

  def show
  end

  def create
    shade = Shade.create!(shade_params)
    render json: shade, status:200
  end

  def delete
  end

  private
  def shade_params
    params.require(:buyer_id).permit(:cost, :roof, :h,:w,:l)
  end
end
