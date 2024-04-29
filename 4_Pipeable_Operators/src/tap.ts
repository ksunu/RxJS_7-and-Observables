import { filter, map, of, tap } from "rxjs"

export const tapOperator = () => {
  of(1, 7, 3, 6, 2).pipe(
    filter(value => value > 5),
    map(value => value * 2),
    tap(value => console.log('Spy: ', value)),
  ).subscribe(value => console.log('Output: ', value))
}