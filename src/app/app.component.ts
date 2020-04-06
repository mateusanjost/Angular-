import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example of Angular 8 DataTable';
  dtOptions: DataTables.Settings = {};
  dtUsers =[
    {"id": 101, "firstName": "Mateus", "lastName": "Anjos"},
    {"id": 102, "firstName": "José", "lastName": "Paranhos"},

 
    {"id": 103, "firstName": "Patricia", "lastName": "Jaques"},
    {"id": 104, "firstName": "Fernanda", "lastName": "Anjos"},
    {"id": 105, "firstName": "Felipe", "lastName": "Paranhos"},
    {"id": 106, "firstName": "Fernando", "lastName": "Paranhos"},
    {"id": 107, "firstName": "Nair", "lastName": "Indefinido"},
    {"id": 108, "firstName": "Dandara", "lastName": "Indefinido"},
    {"id": 109, "firstName": "Itachi", "lastName": "Uchiha"},
    {"id": 110, "firstName": "Sasuke", "lastName": "Uchiha"},
    {"id": 111, "firstName": "Madara","lastName": "Uchiha"}
  ];

  ngOnInit(): void {
    this.dtOptions = {
      data:this.dtUsers,
      columns: [{title: 'User ID', data: 'id'},
            {title: 'First Name', data: 'firstName'},
            {title: 'Last Name', data: 'lastName' }]
    };
  }
}