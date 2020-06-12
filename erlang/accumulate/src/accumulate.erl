-module(accumulate).

-export([accumulate/2]).

accumulate(_Fn, []) -> [];
accumulate(Fn, List) ->
    [Head | Tail] = List,
    [Fn(Head) | accumulate(Fn, Tail)].
