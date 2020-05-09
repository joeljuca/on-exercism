-module(grains).

-export([square/1, total/0]).

square(Square) when Square < 1 ->
    {error, "square must be between 1 and 64"};
square(1) -> 1;
square(Square) when Square < 65 ->
    round(math:pow(2, Square - 1));
square(_) -> {error, "square must be between 1 and 64"}.

cb_grains(1) -> 1;
cb_grains(Squares) ->
    square(Squares) + cb_grains(Squares - 1).

total() -> cb_grains(64).
