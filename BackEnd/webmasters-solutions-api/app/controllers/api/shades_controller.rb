class Api::ShadesController < ApplicationController
  def index
    shades = Shade.all
    render json: shades, status:200
  end

  def show
  end

  def create
    buyer = Buyer.find_or_create_by(email: params[:email])
    binding.pry
    params[:buyer_id] = buyer.id
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
