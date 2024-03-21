class Api::BuyersController < ApplicationController
  def index
    buyers = Buyer.all
    render json: buyers, status: 200
  end

  def show
  end

  def create
    buyer = Buyer.create!(buyer_params)
    render json: buyer, status: 200
  end

  def delete
  end

  private

  def buyer_params
    params.permit(:phone, :name, :address, :email, :price, :model)
  end
end
