import { EMPTY, Observable, catchError, concatMap, fromEvent, map, of } from "rxjs"
import { ajax } from "rxjs/ajax";

export const flatteningOperators = () => {
  // const source$ = new Observable(subscriber => {
  //   setTimeout(() => subscriber.next('A'), 2000)
  //   setTimeout(() => subscriber.next('B'), 5000)
  // })
  // console.log("APP started")
  // source$.pipe(
  //   concatMap(value => of(1, 2))
  // ).subscribe(value => console.log(value))

  /** Dynamic approach */ 
  const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
  const fetchButton = document.querySelector('button#fetch');
  
  fromEvent(fetchButton, 'click').pipe(
    map(() => endpointInput.value),
    concatMap(value =>
      ajax(`https://random-data-api.com/api/${value}/random_${value}`)
        .pipe(
          // catchError(() => EMPTY)
          catchError(error => of(`Could not fetch data: ${error}`))
        ) // catchError should be placed after request to avoid undesired behaviour
    ),
  ).subscribe({
    next: value => console.log(value),
    error: err => console.log('Error', err),
    complete: () => console.log('Completed')
  })
}