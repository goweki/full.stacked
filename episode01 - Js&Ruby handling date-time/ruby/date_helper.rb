require 'tzinfo'

module DateHelper
  def greetings(username, time)
    current_hour = time.hour

    greeting = if current_hour < 12
                 'Good morning'
               elsif current_hour < 18
                 'Good afternoon'
               else
                 'Good evening'
               end

    "#{greeting}, #{username}"
  end

  def get_time_in_eat(time)
    timezone = TZInfo::Timezone.get('Africa/Nairobi')
    localized_time = timezone.to_local(time)
    localized_time.strftime('%d/%m/%Y')
  end

  def get_epoch_time(time)
    time.to_i
  end
end
