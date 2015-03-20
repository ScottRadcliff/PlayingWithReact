require "sinatra"
require "sinatra/json"
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end


get "/data.json" do
  json process_data
end


post "/update" do
  json process_data(params[:total])
end


def process_data(updated_total=100)
  {
    lastWeekPercent: updated_total.to_i + 75,
    thisWeekPercent: updated_total.to_i + 65,
    averagePercent: updated_total.to_i + 34,
    completePercent: updated_total.to_i + 300,
    onTimePercent: updated_total }
end
