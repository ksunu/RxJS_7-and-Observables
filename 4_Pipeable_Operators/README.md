# Pipeable Operators

- [filter] filter emitted values and passes them through or not
- [map] takes emitted value and can transform it into some other value, very useful to extract some single property nested inside of a more complex object
- [tap] allows to cause side effects without changing notifications, useful for debugging and learning purposes
- [debounceTime] useful if the source Observable emits a lot of values and then settles down, often used for the input of the user
- [catchError] when error notification is emitted by the source Observable, this operator will not pass the error through, but instead will use the provided fallback Observable as the new source
- [concat/switch/merge] take inconming emitted value and map it into another Observable, concatMap variant is the safest choice.
  - concatMap - handles notifications one by one
    1. queues / buffers
    2. Memory leaks easy to notice
    3. Values handled one by one
    4. Possible delayed reactions
  - switchMap - handle most recent event, which can be unpredictible when http requests are made, it is useful to fetch to recieve only most recent response
    1. cancels / unsubscribes
    2. Memory leaks not dangerous
    3. Quick reaction to new source values
    4. Order mostly safe
  - mergeMap - allows multiple inner subscriptions but order can be alterated, should make sure complete subscription to avoid memory leaks
    1. concurrent
    2. Memory leaks hard to notice
    3. No definite order
