import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{

  pId:any;
  pName:any;
  pImage:any;
  pPrice:any;
  pDesc:any;
  pQuantity:any;
  pcId:any
  
  constructor(private router:Router, private mobileser:MobileserviceService){ }

  ngOnInit(): void {
    
    
  }
  addproduct(addForm:any){
    
    
     console.log(addForm);

     this.mobileser.saveProduct(addForm).subscribe((response:any)=>{
      //this.router.navigateByUrl("/producttable");
      setTimeout(() => {
       
        this.router.navigateByUrl('productable');
      }, 1000);
     });
    
    this.pId=this.pId;
    this.pName=this.pName;
    this.pImage=this.pImage;
    this.pPrice=this.pPrice;
    this.pDesc=this.pDesc;
    this.pQuantity=this.pQuantity;
    this.pcId=this.pcId;

}
  }