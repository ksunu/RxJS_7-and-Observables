import { forkJoin, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';


export const mapOperator = () => {
  const randomFirstName$ = ajax<any>('https://random-data-api.com/api/name/random_name').pipe(
    map(ajaxResponse => ajaxResponse.response.first_name)
  )
  const randomCapital$ = ajax<any>('https://random-data-api.com/api/nation/random_nation').pipe(
    map(ajaxResponse => ajaxResponse.response.capital)
  )
  const randomDish$ = ajax<any>('https://random-data-api.com/api/food/random_food').pipe(
    map(ajaxResponse => ajaxResponse.response.dish)
  )

  forkJoin([randomFirstName$, randomCapital$, randomDish$]).subscribe(
    ([firstName, capital, dish]) => 
    console.log(`${firstName} is from ${capital} and likes to eat ${dish}`)
  )
}