import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  sort = 'desc';
  itemsShowCount = 12;
  @Output() columsCountChange = new EventEmitter<number>();

  onSortUpdated(newSort: string):void{
    this.sort = newSort;
  }

  onItemsUpdated(count: number):void{
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number):void{
    this.columsCountChange.emit(colsNum);
  }

}
