import { fromEvent, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, switchMap } from 'rxjs/operators';

// free api url
const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

// streams
// const click$ = fromEvent(document, 'click');
const click$ = timer(0, 5000);

click$
  .pipe(
    /*
     * Using mergeMap for example, but generally for GET requests
     * you will prefer switchMap.
     * Also, if you do not need the parameter like
     * below you could use mergeMapTo instead.
     * ex. mergeMapTo(ajax.getJSON(API_URL))
     */
    mergeMap(() => ajax.getJSON(API_URL))
  )
  // { userId: 1, id: 1, ...}
  .subscribe((data) => console.log('data: ', data));
