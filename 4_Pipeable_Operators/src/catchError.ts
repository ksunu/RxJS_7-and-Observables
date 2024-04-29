import { EMPTY, Observable, catchError, of } from "rxjs"

export const catchErrorOperator = () => {
  const failingHttpRequest$ = new Observable(subscriber => {
    setTimeout(() => {
      subscriber.error(new Error('Timeout'))
    }, 3000)
  })

  console.log("APP started")

  // failingHttpRequest$.pipe(
  //   catchError(error => of('Fallback value'))
  // ).subscribe(value => console.log(value))

  failingHttpRequest$.pipe(
    // Empty observable just hide error
    catchError(error => EMPTY)
  ).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
  })
}