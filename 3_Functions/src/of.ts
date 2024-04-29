/**
 * @of
 */
import { Observable, of } from "rxjs"

export const ofFunction = () => {
  /** Example of */
  // of('Alice', 'Ben', 'Charlie').subscribe({
  //   next: value => console.log(value),
  //   complete: () => console.log('completed')
  // })
  
  /** Example of destructured */
  // const name$ = new Observable<string>(subscriber => {
  //   subscriber.next('Alice')
  //   subscriber.next('Ben')
  //   subscriber.next('Charlie')
  //   subscriber.complete()
  // })
  
  // name$.subscribe({
  //   next: value => console.log(value),
  //   complete: () => console.log('completed')
  // })
  
  /** Example of with a function */
  ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
    next: value => console.log('"of"', value),
    complete: () => console.log('"of" completed')
    })
    
  function ourOwnOf(...args: string[]): Observable<string> {
    return new Observable<string>(subscriber => {
      for (let i = 0; i < args.length; i++) {
        subscriber.next(args[i])
      }
      subscriber.complete()
    })
  }
}
