export class Page<T> {
  count: number = 0;      // total number of items
  next: string = '';  // URL of the next page
  previous: string = ''; // URL of the previous page
  results: Array<T> = [];  // items for the current page
}
