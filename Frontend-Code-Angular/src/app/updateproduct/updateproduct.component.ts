import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit{

  pId:any;
  pName:any;
  pImage:any
  pPrice:any;
  pDesc:any;
  pQuantity:any;
  pcId:any
  @ViewChild('updateForm') updateForm: NgForm | undefined;
  constructor(private router:Router, private mobileSer:MobileserviceService, private route:ActivatedRoute){ 
    this.pId = this.route.snapshot.paramMap.get('pId');
    this.getProductById();
  }

  ngOnInit(): void {
    
    
  }
 updateproduct(proObj:any){
  console.log(proObj);
     
     this.mobileSer.updateProduct(proObj).subscribe((response:any)=>{
      this.router.navigateByUrl("productable");
     });

 }
 getProductById(){
  this.mobileSer.getProductById(this.pId).subscribe((response:any)=>{
    this.pId=this.pId;
    this.pName=this.pName;
    this.pImage=this.pImage;
    this.pPrice=this.pPrice;
    this.pDesc=this.pDesc;
    this.pQuantity=this.pQuantity;
    this.pcId=this.pcId;
    this.updateForm?.setValue(response);
  })

}
}
