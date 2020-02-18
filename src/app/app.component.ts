import { Component } from "@angular/core";
import { Item } from "./models/item.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items: Item[];
  filteredItems: Item[];
  activeButton: string;
  completed: boolean;
  constructor() {
    this.items = [
      {
        id: 1,
        title: "create todo list",
        time: new Date().toLocaleString(),
        isCompleted: false
      },
      {
        id: 2,
        title: "create todo list with any actions",
        time: new Date().toLocaleString(),
        isCompleted: false
      },
      {
        id: 3,
        title: "create",
        time: new Date().toLocaleString(),
        isCompleted: false
      }
    ];
    this.filteredItems = this.items;
    this.activeButton = "all";
  }
  idFunction() {
    const arr = [];
    this.items.map(item => arr.push(item.id));
    return Math.max(...arr);
  }
  addNewItem(item: HTMLInputElement): void {
    this.items.push({
      id: this.idFunction() + 1 || 1,
      title: item.value,
      time: new Date().toLocaleString(),
      isCompleted: false
    });
    item.value = "";
  }
  completedItem(id: number): void {
    this.items[id - 1].isCompleted = true;
  }
  allItems() {
    this.activeButton = "all";
    return (this.filteredItems = this.items);
  }
  activeItems() {
    this.activeButton = "active";
    return (this.filteredItems = this.items.filter(item => !item.isCompleted));
  }
  completedItems() {
    this.activeButton = "completed";
    if (!this.items.filter(item => item.isCompleted).length) {
      this.completed = true;
    } else {
      this.completed = false;
    }
    return (this.filteredItems = this.items.filter(item => item.isCompleted));
  }
  removeItems(): void {
    if (this.items.filter(item => !item.isCompleted).length) {
      this.items = this.items.filter(item => !item.isCompleted);
      this.filteredItems = this.items;
    }
    return;
  }
  defaultActiveButton() {
    this.activeButton = "all";
    this.filteredItems = this.items;
  }
}
