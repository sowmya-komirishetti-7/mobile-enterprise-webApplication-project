import { Component, OnInit } from '@angular/core';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit{
  product:any;
  constructor(private mobileser:MobileserviceService){}

  ngOnInit(): void {
    this.getAllProducts();
    
  }
  
  getAllProducts(){
    return this.mobileser.getAllProducts().subscribe((data:any)=>{
      this.product=data;
      console.log(data);
    })
    
  }
  deleteProduct(proId:string){
    if(!(confirm('Are you sure you want to delete this product'))) {
      //return false;
    } 
    else{
      
       this.mobileser.deleteProduct(proId).subscribe((response: string)=>{
        alert(response);
       this.getAllProducts();
     });
    }
     
  }

}
