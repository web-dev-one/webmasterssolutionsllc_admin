class Api::BuyersController < ApplicationController
  def index
    buyers = Buyer.all
    render json: buyers, status: 200
  end

  def show
  end

  def create
    binding.pry
    buyer = Buyer.new(
      name: params[:name],
      address: params[:address],
      phone: params[:phone],
      email: params[:email],
      install: params[:install],
     
      price: params[:price]
    )
  end

  def delete
  end
end
