import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { MobileserviceService } from '../mobileservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
 export class AddtocartComponent implements OnInit {
  public productlist: any=[];
  product:Product=new Product();
  totalAmount: number = 0;
  quantity:number=0;
  delivery:number=58;
  // grandTotal:any;
  total:any =[];
  
  constructor(private mobileser:MobileserviceService, private router:Router, private toaster:ToastrService){
    
  }
 ngOnInit(): void {
  this.getCartList();
 
  
 }
 removeItem(item:any){
  this.mobileser.deleteCart(item).subscribe((res:any)=>{
    this.toaster.error("Item removed from cart...")
setTimeout(() => {
  
}, 400);
    
    this.getCartList();
  });
 }

 getCartList(){
  this.mobileser.getAllCart().subscribe((res:any)=>{
    this.productlist = res;
   
    // this.grandTotal=0;
    this.productlist.forEach((element: any) => {
      // this.grandTotal +=(element.pPrice*this.quantity)
      this.mobileser.getProductById(element.pId).subscribe((res:any)=>{
        element.product = res;
        
      })
      
    });
  })
 }
 pay(){
  this.router.navigateByUrl("/payment")
}

updateTotalAmount() {
  this.totalAmount = 0;
  this.productlist.forEach(
    (pur: any) => {
      
      if (pur && pur?.product && pur?.product.pPrice && pur.pQuantity) {
        if (!isNaN(pur?.product.pPrice) && !isNaN(pur.pQuantity)) {
          var price=
          this.totalAmount = this.totalAmount + (pur?.product.pPrice * pur.pQuantity);
          localStorage.setItem('price', price.toString());
        }
        
      }
    }
  );

}
available(){
  if(this.quantity>=this.product.pQuantity){
    alert("items not available");
  }
}

}