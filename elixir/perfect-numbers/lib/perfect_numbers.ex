defmodule PerfectNumbers do
  @doc """
  Determine the aliquot sum of the given `number`, by summing all the factors
  of `number`, aside from `number` itself.

  Based on this sum, classify the number as:

  :perfect if the aliquot sum is equal to `number`
  :abundant if the aliquot sum is greater than `number`
  :deficient if the aliquot sum is less than `number`
  """
  @spec classify(number :: integer) :: {:ok, atom} | {:error, String.t()}
  def classify(number) when number > 0 do
    # - [x] List of all factors
    # - [ ] Check if sum of factors equals `number`

    factor_sum =
      number
      |> factors()
      |> Enum.sum()

    classification =
      cond do
        factor_sum == number -> :perfect
        factor_sum > number -> :abundant
        true -> :deficient
      end

    {:ok, classification}
  end

  def classify(_number), do: {:error, "Classification is only possible for natural numbers."}

  def factors(numbers), do: factors(numbers, div(numbers, 2), [])
  def factors(_number, 1, prev_factors), do: [1 | prev_factors]

  def factors(number, current, prev_factors) when rem(number, current) == 0 do
    factors(number, current - 1, [current | prev_factors])
  end

  def factors(number, current, prev_factors), do: factors(number, current - 1, prev_factors)
end
