class DataController < ApplicationController
  def index
    url = 'https://news.yahoo.co.jp/pickup/rss.xml'
    uri = URI.parse(url)
    response = Net::HTTP.get_response(uri)
    render plain:Hash::from_xml(response.body).to_json
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
