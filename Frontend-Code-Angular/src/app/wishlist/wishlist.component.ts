import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MobileserviceService } from '../mobileservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public productlist: any=[];
  product:Product=new Product();
  pName:any;
  
  constructor(private mobileser:MobileserviceService, private router:Router,private toaster:ToastrService){}
 ngOnInit(): void {
  this.getWishList();
  
  
 }
 
 removeItem(item:any){
  this.mobileser.deleteWishlist(item).subscribe((res:any)=>{
        this.toaster.error("Item removed from Wishlist...")
    
    setTimeout(() => {
      
    }, 400);
      
    this.getWishList();
  });
 }
//  emptycart(){
//   this.mobileser.removeAllCart();
//  }
 getWishList(){
  this.mobileser.getAllWishlist().subscribe((res:any)=>{
    this.productlist = res;
    this.productlist.forEach((element: any) => {
      this.mobileser.getProductById(element.pId).subscribe((res:any)=>{
        element.product = res;
      })
    });
  })
 } 
}

