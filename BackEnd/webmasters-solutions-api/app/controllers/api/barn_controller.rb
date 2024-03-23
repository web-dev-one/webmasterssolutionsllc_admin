class Api::BarnController < ApplicationController

    def index
        barns = Barn.all
        render :json, status: 200
    end
end
