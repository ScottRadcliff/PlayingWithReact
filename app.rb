require "sinatra"
require "sinatra/json"
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end


get "/data.json" do
  data = {
    lastWeekPercent: 122,
    thisWeekPercent: 300,
    averagePercent: 10,
    completePercent: 3,
    onTimePercent: 12 }
  json data
end
