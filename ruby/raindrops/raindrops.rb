module BookKeeping
  VERSION = 3
end

class Raindrops
  def self.convert(raindrops)
    drops = Hash.new
    drops[3] = "Pling"
    drops[5] = "Plang"
    drops[7] = "Plong"

    return raindrops.to_s if (raindrops % 3 != 0 && raindrops % 5 != 0 && raindrops % 7 != 0)

    drops.keys
      .reduce('') { |song, drop|
        raindrops % drop == 0 ? (song += drops[drop]) : song
      }
  end
end
