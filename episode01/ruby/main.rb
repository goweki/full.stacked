require_relative 'date_helper'

class Main
  include DateHelper

  attr_accessor :time

  def initialize(time: Time.now)
    @time = time
  end
end

main = Main.new

puts main.greetings('Kiarie', main.time)
puts main.get_time_in_eat(main.time)
puts main.get_epoch_time(main.time)
