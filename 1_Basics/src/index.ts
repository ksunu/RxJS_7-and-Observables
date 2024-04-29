import { Observable } from 'rxjs';
import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

/** How observable works */

// name$.subscribe(value => console.log(value))

// storeDataOnServerError('Some value').subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error when saving: ', err.message)
// })

const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed')
  subscriber.next('Alice')
  setTimeout(() => subscriber.next('Ben'), 2000)
  setTimeout(() => subscriber.next('Charlie'), 4000)
})

// const observer = {
//   next: (value: string) => console.log(value)
// }

// observable$.subscribe(observer)

// const subscrition = observable$.subscribe(value => console.log(value))

// setTimeout(() => {
//   console.log('Unsubscribe')
//   subscrition.unsubscribe()
// }, 3000)

/** When calling subscribing observable more than once (recurrent) */
// console.log('Subscription 1 starts')
// const subscrition = observable$.subscribe(value => console.log('Subscription 1: ', value))

// setTimeout(() => {
//   console.log('Subscription 2 starts')
//   const subscrition = observable$.subscribe(value => console.log('Subscription 2: ', value))
// }, 1000)


/** Example of subscription lifecycle */
// const lifeCycleObservable$ = new Observable(subscriber => {
//   console.log('#2.1 Observable executed')
//   subscriber.next('#2.2 First Subscriber')
//   setTimeout(() => subscriber.next('Second Subscriber 2000'), 2000)
//   setTimeout(() => {
//     subscriber.next('Third Subscriber 4000')
//   }, 4000)

//   setTimeout(() => subscriber.error(new Error('Failed')),3000)
//   return () => {
//     console.log('Teardown - cleanup & cancellation')
//   }
// })
// console.log('#1 Before subscribe')
// lifeCycleObservable$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log(err.message),
//   complete: () => console.log('Completed')
// })
// console.log('#3 After subscribe')

/** Example Unsubscribe */
const interval$ = new Observable<number>(subscriber => {
  let counter = 1
  const intervalId = setInterval(() => {
      console.log('Emitted', counter)
      subscriber.next(counter++)
    }, 2000)

  return () => clearInterval(intervalId)
})

const subscription = interval$.subscribe(value => console.log(value))

setTimeout(() => {
  console.log('Unsubscribe')
  subscription.unsubscribe()
}, 7000)
