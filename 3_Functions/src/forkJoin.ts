/**
 * @forkJoin
 */
import { Observable, forkJoin } from "rxjs";
import { ajax } from 'rxjs/ajax';

export const forkJoinFunction = () => {

  /** Example */
  const randomName$ = ajax<any>('https://random-data-api.com/api/name/random_name')

  const randomNation$ = ajax<any>('https://random-data-api.com/api/nation/random_nation')

  const randomFood$ = ajax<any>('https://random-data-api.com/api/food/random_food')

  // randomName$.subscribe((ajaxResponse: any) => console.log(ajaxResponse.response.first_name))
  // randomNation$.subscribe((ajaxResponse: any) => console.log(ajaxResponse.response.capital))
  // randomFood$.subscribe((ajaxResponse: any) => console.log(ajaxResponse.response.dish))

  // forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  //   ([nameAjax, nationAjax, foodAjax]) => console.log(`${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}`)
  // )

  /** Error scenario */
  const a$ = new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next('A')
      subscriber.complete()
    }, 3000)

    return () => console.log('A Teardown')
  })

  const b$ = new Observable(subscriber => {
    setTimeout(() => {
      subscriber.error('Failure')
    }, 5000)
    return () => console.log('B Teardown')
  })

  forkJoin([a$, b$]).subscribe({
    next: value => console.log(value),
    error: err => console.log('Error', err)
  })
}

