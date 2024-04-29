/**
 * @combineLatest
 */
import { Observable, combineLatest, fromEvent } from "rxjs";
import { ajax } from 'rxjs/ajax';

export const combineLatestFunction = () => {
  const temperatureInput = document.getElementById('temperature-input');
  const conversionDropdown = document.getElementById('conversion-dropdown');
  const resultText = document.getElementById('result-text');

  const temperatureInputEvent$ = fromEvent(temperatureInput, 'input')
  const conversionInputEvent$ = fromEvent(conversionDropdown, 'input')

  combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
    ([tempEvent, convEvent]: any) => {
      const temperature = Number(tempEvent.target['value'])
      const conversion = convEvent.target['value']

      let result: number

      if (conversion === 'f-to-c') result = (temperature - 32) * 5 / 9
      if (conversion === 'c-to-f') result = temperature * 9 / 5 + 32
      
      resultText.innerText = String(result)
    }
  )
  
}

