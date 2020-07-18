class DataController < ApplicationController
  def index
  end

  def ajax
    if params[:name] then
      data = Datum.where 'name like ?', '%' +
          params[:name] + '%'
    else
      data = Datum.all
    end
    render plain:data.to_json
  end

end
