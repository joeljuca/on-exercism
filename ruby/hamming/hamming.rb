module BookKeeping
  VERSION = 3
end

class Hamming
  
  def self.compute(left, right)
    if left.length != right.length
      raise ArgumentError
    end
    
    diff_count = 0
    
    left
      .split('')
      .each_index { |i|
        diff_count += 1 if left[i] != right[i]
      }
    
    diff_count
  end
  
end