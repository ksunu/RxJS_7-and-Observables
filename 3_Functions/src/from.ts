/**
 * @from
*/
import { Observable, from } from "rxjs";

export const fromFunction = () => {
  /** Example from */
  // from(['Alice', 'Ben', 'Charlie']).subscribe({
  //   next: value => console.log(value),
  //   complete: () => console.log('Completed')
  // })
  
  /** Example from with Promise */
  const somePromise = new Promise((resolve, reject) => {
    // resolve('Resolved')
    reject('Rejected!')
  })
  
  const observableFromPromise$ = from(somePromise)
  
  observableFromPromise$.subscribe({
    next: value => console.log('"from"', value),
    error: err => console.log('"from" Error:', err),
    complete: () => console.log('"from" completed')
  })
}
