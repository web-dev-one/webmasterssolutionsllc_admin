class Api::BuyersController < ApplicationController
  def index
    buyers = Buyer.all
    render json: buyers, status: 200
  end

  def show
  end

  def create
    
    params[:animals] = [params[:animals]]
    #interests of clinet is same as products
    params[:products] = [params[:interest]]
    buyer = Buyer.create!(buyer_params)
    render json: buyer, status: 200
  end

  def delete
  end

  private

  def buyer_params
    params.permit(:phone, :name, :address, :email, :status, :origin, :products, :animals=>[], )
  end
end
