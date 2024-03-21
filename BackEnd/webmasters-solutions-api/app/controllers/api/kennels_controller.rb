class Api::KennelsController < ApplicationController
  def index
    kennels = Kennel.all
    render json: kennels, status: 200
  end

  def show
  end

  def create
  end

  def delete
  end
end
