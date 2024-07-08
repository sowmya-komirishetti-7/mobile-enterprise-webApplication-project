import { Component, OnInit } from '@angular/core';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-categorytable',
  templateUrl: './categorytable.component.html',
  styleUrls: ['./categorytable.component.css']
})
export class CategorytableComponent implements OnInit{
  category:any;
  constructor(private mobileser:MobileserviceService){}

  ngOnInit(): void {
    this.getAllCategory();
    
  }
  
  
  getAllCategory(){
    return this.mobileser.getAllCategory().subscribe((data:any)=>{
      this.category=data;
      console.log(data);
    })
    
  }
  deleteCategory(catId:string){
    if(!(confirm('Are you sure you want to delete this category'))) {
      //return false;
    } 
    else{
      
       this.mobileser.deleteCategory(catId).subscribe((response: string)=>{
        alert(response);
       this.getAllCategory();
     });
    }
     
  }

}


