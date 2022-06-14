import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/domain/models/category/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  all_categories:Categories[] = [{"id": 1, "code": "CAT0001", "title": "Categoria padre 1", "description": "Categoria padre ", "idParentCategory": 0, "createDate": "21-06-2022", "updateDate": "21-06-2022", "softDelete": ""},
                          {"id": 2, "code": "CAT0002", "title": "Categoria hija 1", "description": "Categoria heredada", "idParentCategory": 1, "createDate": "22-06-2022", "updateDate": "22-06-2022", "softDelete": ""},
                          {"id": 3, "code": "CAT0003", "title": "Categoria padre 2", "description": "Categoria padre", "idParentCategory": 0, "createDate": "21-06-2022", "updateDate": "21-06-2022", "softDelete": ""},
                          {"id": 4, "code": "CAT0004", "title": "Categoria hija 2", "description": "Categoria heredada", "idParentCategory": 3, "createDate": "22-06-2022", "updateDate": "22-06-2022", "softDelete": ""},
                          {"id": 5, "code": "CAT0005", "title": "Categoria padre 3", "description": "Categoria padre", "idParentCategory": 0, "createDate": "21-06-2022", "updateDate": "21-06-2022", "softDelete": ""},
                          {"id": 6, "code": "CAT0006", "title": "Categoria hija 3", "description": "Categoria heredada", "idParentCategory": 5, "createDate": "22-06-2022", "updateDate": "22-06-2022", "softDelete": ""}
                          ];
  
 
    editTitle:string = "";
    editDescription:string= "";
    editIdParentCategory: number = 0;
  
  constructor(private router:Router) { }

  ngOnInit() {
    this.validSesion();
  }

  editCategory(category:Categories){
    this.editTitle = category.title;
    this.editDescription = category.description;
    this.editIdParentCategory = category.idParentCategory;
  }

  validSesion() {
    if (!localStorage.getItem('auth')) {
      this.router.navigate(['/']);
    }
  }

}
