import { BehaviorSubject, Subject, fromEvent, withLatestFrom } from "rxjs";

export const behaviorSubject = () => {
  const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
  const loginButton: HTMLElement = document.querySelector('button#login');
  const logoutButton: HTMLElement = document.querySelector('button#logout');
  const printStateButton: HTMLElement = document.querySelector('button#print-state');

  /** Example with regular subject, it does not have an initial value */
  // const isLoggedIn$ = new Subject<boolean>()

  // fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true))
  // fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false))

  // // Navigation bar
  // isLoggedIn$.subscribe(
  //   isLoggedIn => loggedInSpan.innerText = isLoggedIn.toString()
  // )

  // // Buttons
  // isLoggedIn$.subscribe(isLoggedIn => {
  //   logoutButton.style.display = isLoggedIn ? 'block' : 'none'
  //   loginButton.style.display = !isLoggedIn ? 'block' : 'none'
  // })

  /** Example with behavior subject */
  const isLoggedIn$ = new BehaviorSubject<boolean>(false)
  fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true))
  fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false))

  // Navigation bar
  isLoggedIn$.subscribe(
    isLoggedIn => loggedInSpan.innerText = isLoggedIn.toString()
  )

  // Buttons
  isLoggedIn$.subscribe(isLoggedIn => {
    logoutButton.style.display = isLoggedIn ? 'block' : 'none'
    loginButton.style.display = !isLoggedIn ? 'block' : 'none'
  })

  fromEvent(printStateButton, 'click').pipe(
    withLatestFrom(isLoggedIn$)
  ).subscribe(
    ([event, isLoggedIn]) => console.log('User is logged in:', isLoggedIn)
  )
}