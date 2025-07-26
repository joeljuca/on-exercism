# Why exactly should I define this BookKeeping module over here?
module BookKeeping
  # and why 5?
  VERSION = 5
end

class Gigasecond
  def self.from(birthdate)
    birthdate + 1.0E9
  end
end