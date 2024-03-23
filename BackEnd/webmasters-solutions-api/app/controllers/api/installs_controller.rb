class Api::InstallsController < ApplicationController
  def index
    installs = Install.all
    render json: installs, status:200
  end

  def show
  end

  def create
  buyer = Buyer.find_or_create_by(email: params[:email])
  binding.pry
  install = Install.create!(install_params)
  render json: install, status: 200
  end

  def delete
  end

  private

  def install_params
    params.require(:buyer_id).permit(:installation_address, :worker_count, :shade_id, :installation_date)
  end
end
