/** 
 * @fromEvent
*/
import { Observable, fromEvent } from "rxjs";

export const fromEventFunction = () => {
  const triggerButton = document.querySelector('button#trigger');
  
  /** Example fromEvent */
  // fromEvent<MouseEvent>(triggerButton, 'click').subscribe((event) => console.log('"fromEvent"', event.type, event.x, event.y))
  
  /** Example fromEvent destructured */
  // const triggerClick$ = new Observable<MouseEvent>(subscriber => {
  //   triggerButton.addEventListener('click', (event: MouseEvent) => {
  //     subscriber.next(event)
  //   })
  // })
  
  // triggerClick$.subscribe((event) => console.log('"fromEvent"', event.type, event.x, event.y))
  
  /** Example fromEvent with unsubscription */
  // const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe((event) => console.log('"fromEvent"', event.type, event.x, event.y))
  
  // setTimeout(() => {
  //   console.log('fromEvent unsubscribe"')
  //   subscription.unsubscribe()
  // }, 5000)
  
  /** Example fromEvent with unsubscription destructured */
  const triggerClick$ = new Observable<MouseEvent>(subscriber => {
    const clickHandlerFn = (event: MouseEvent) => {
      console.log('"fromEvent" Event callback executed')
      subscriber.next(event)
    }
  
    triggerButton.addEventListener('click', clickHandlerFn)
    return () => triggerButton.removeEventListener('click', clickHandlerFn)
  })
  const subscription = triggerClick$.subscribe((event) => console.log('"fromEvent"', event.type, event.x, event.y))
  
  setTimeout(() => {
    console.log('fromEvent unsubscribe"')
    subscription.unsubscribe()
  }, 5000)

}