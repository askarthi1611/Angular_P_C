import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // Define input property to receive items array from parent component
  @Input() items: any[] = [];
  
  // Define output property to emit event when an item is deleted
  @Output() deleteItem = new EventEmitter<number>();
  
  constructor() { }
  
  // Function to handle deletion of an item
  onDeleteItem(id: number) {
    // Emit the deleteItem event with the ID of the item to be deleted
    this.deleteItem.emit(id);
  }

}
