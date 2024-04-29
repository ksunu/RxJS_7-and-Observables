import { Observable } from "rxjs"
import { ajax } from "rxjs/ajax"

/** Cold Observable */
const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name')
  
// ajax$.subscribe(
//   data => console.log("1", data.response.first_name)
// )

// ajax$.subscribe(
//   data => console.log("2", data.response.first_name)
// )

// ajax$.subscribe(
//   data => console.log("3", data.response.first_name)
// )

/** Hot Observable */ 
const helloButton = document.querySelector('button#hello')

const helloClick$ = new Observable<MouseEvent>(subscriber => {
  helloButton.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event)
  })
})

helloClick$.subscribe(event => console.log("#1", event.type, event.x, event.y))
helloClick$.subscribe(event => console.log("#2", event.type, event.x, event.y))
setTimeout(() => {
  console.log('#3 Subs start')
  helloClick$.subscribe(event => console.log("#3", event.type, event.x, event.y))
}, 5000)

