import { Pipe, PipeTransform } from '@angular/core';
import { ModelService } from "../model/model.service";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  private counter = 0;

  transform(books: ModelService[], searchTerm: string): ModelService[] {
    if (!books || !searchTerm) {
      return books;
    }
    return books.filter(book =>
      book.bookName.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1);
  }
  }


