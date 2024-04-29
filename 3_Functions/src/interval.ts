import { Observable, interval } from "rxjs"

/**
 * @interval
 */


export const intervalFunction = () => {
  console.log('"interval" STARTED')
  /** Example interval */
  // interval(1000).subscribe({
  //   next: value => console.log('"timer"', value),
  //   complete: () => console.log('"timer" Completed')
  // })
  
  /** Example interval unsubscription */
  // const subscription = interval(1000).subscribe({
  //   next: value => console.log('"timer"', value),
  //   complete: () => console.log('"timer" Completed')
  // })
  
  // setTimeout(() => {
  //   subscription.unsubscribe()
  //   console.log('Unsubscribe')
  // }, 5000)
  
  /** Example interval destructured */
  const interval$ = new Observable<number>(subscriber => {
    let counter = 0
    const intervalId = setInterval(() => {
      console.log('Timeout!')
      subscriber.next(counter++)
    }, 2000)

    return () => clearInterval(intervalId)
  })

  const subscription = interval$.subscribe({
    next: value => console.log('"timer"', value),
    complete: () => console.log('"timer" Completed')
  })
  
  setTimeout(() => {
    subscription.unsubscribe()
    console.log('Unsubscribe')
  }, 5000)
  
}