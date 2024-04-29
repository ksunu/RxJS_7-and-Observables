# Functions

- [of] emits values provided as arguments and completes
- [from] can convert arrays, promises, iterables into an observable
- [fromEvent] allows to create an Observable from some event target, subscribing (addEventLister) and unsubscribing (removeEventLister)
- [interval/timer] generate Observable emitting notifications with some delay or in intervals, like 'setTimeOut' and 'setInterval'
- [forkJoin] accepts an array of Observables as input, after all Observables complete it emits set of latest values emitted by each of them. Useful when waiting results of multiple HTTP calls
- [combineLatest] accepts multiple input Observables, each time any of them emits something new, a combined set of the latest values will be emitted as an array
