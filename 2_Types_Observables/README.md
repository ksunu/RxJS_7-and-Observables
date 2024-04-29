# Cold Observable

- When the data is produced inside the observable
- Each new subscription generates data independently
- examples: set of values, HTTP request, timer/Interval...

# Hot Observable

- Multicasts the data from a common source
- All subrcribers emits common data
- examples: DOM events, state, subjects
