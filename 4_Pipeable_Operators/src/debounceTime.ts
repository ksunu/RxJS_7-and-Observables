import { debounceTime, fromEvent, map } from "rxjs"

export const debounceTimeOperator = () => {
  const sliderInput = document.querySelector('input#slider')

  fromEvent(sliderInput, 'input').pipe(
    debounceTime(2000),
    map((event: any) => event.target['value'])
  ).subscribe(value => console.log(value))
}