import { Pipe, PipeTransform } from '@angular/core';
import { Model  } from "../pipes/model";
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  private counter = 0;

  transform(books: Model[], searchTerm: string) {
    if (!books || !searchTerm) {
      return books;
    }

    return books.filter(book =>
      book.bookName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}  


