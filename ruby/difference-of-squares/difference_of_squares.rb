module BookKeeping
  VERSION = 4
end

class Squares
  def initialize(number)
    @number = number
  end

  def square_of_sum
    total_sum = Array(1..@number)
      .reduce(0) { |total, i| total + i }

    total_sum ** 2
  end

  def sum_of_squares
    Array(1..@number)
      .map { |n| n ** 2 }
      .reduce(0) { |total, n| total + n }
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
