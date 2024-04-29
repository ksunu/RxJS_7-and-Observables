import { Observable, timer } from "rxjs"

/**
 * @timer
 */


export const timerFunction = () => {
  console.log('"timer" STARTED')
  /** Example timer */
  // timer(2000).subscribe({
  //   next: value => console.log('"timer"', value),
  //   complete: () => console.log('"timer" Completed')
  // })
  
  /** Example timer destructured */
  // const timer$ = new Observable<number>(subscriber => {
  //   setTimeout(() => {
  //     subscriber.next(0)
  //     subscriber.complete()
  //   }, 2000)
  // })
  
  // timer$.subscribe({
  //   next: value => console.log('"timer"', value),
  //   complete: () => console.log('"timer" Completed')
  // })
  
  /** Example timer with unsubscribtion */
  // const subscription = timer(2000).subscribe({
  //   next: value => console.log('"timer"', value),
  //   complete: () => console.log('"timer" Completed')
  // })
  
  // setTimeout(() => {
  //   subscription.unsubscribe()
  // }, 1000)

  /** Example timer with unsubscription destructured */
  const timer$ = new Observable<number>(subscriber => {
    const timeoutId = setTimeout(() => {
      console.log('Timeout!')
      subscriber.next(0)
      subscriber.complete()
    }, 2000)

    return () => clearTimeout(timeoutId)
  })
  
  const subscription = timer$.subscribe({
    next: value => console.log('"timer"', value),
    complete: () => console.log('"timer" Completed')
  })

  setTimeout(() => {
    subscription.unsubscribe()
    console.log('Unsubscribe')
  }, 1000)
}