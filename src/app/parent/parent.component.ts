import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // Define an empty object called formData to hold form data
formData: any = {};

// Function to submit the form data
submitForm() {
  // Generate a unique ID based on the length of items array + 1
  this.formData.id = this.items.length + 1;
  // Push the formData object into the items array
  this.items.push(this.formData);
  // Reset the formData object to empty after submission
  this.formData = {};
}

// Initialize items array with sample data
items: any = [{
  "name": "Karthikeyan S",
  "email": "skarthiking16111999@gmail.com",
  "phone": "07708550202",
  "age": 3,
  "dob": "2024-01-02",
  "gender": "Male",
  "id": 1
}];

// Constructor for the component
constructor() { }

// Function to delete an item from the items array based on its ID
deleteItem(id: any) {
  // Filter out the item with the specified ID from the items array
  if (confirm('Are you sure to delete this user from record')) {
    this.items = this.items.filter((item: any) => item.id !== id);    
  }
}

}
