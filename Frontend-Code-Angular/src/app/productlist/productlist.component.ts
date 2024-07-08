import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastNoAnimation, ToastrService } from 'ngx-toastr';
import { MobileserviceService } from '../mobileservice.service';
import { Product } from '../product';
import { User } from '../user';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
 // product: Product = new Product();
   user: User= new User();
  product:any;
  searchText:any;
  productlist: any;
  cartList: any;
  pId:any
  addtowishlist: boolean = false;
  uName = localStorage.getItem('uName');
  constructor(private mobileser:MobileserviceService, private router:Router, private route:ActivatedRoute,private toaster: ToastrService,private authService: SocialAuthService){}

  ngOnInit(): void {
    this.getAllProducts();
     }
  getAllProducts(){
    return this.mobileser.getAllProducts().subscribe((data:any)=>{
      this.product=data;
      

      
      console.log(data);
      });
    //});
}
 addtocart(product:any){
    // let products = [product];
     this.mobileser.saveCart({ uId: this.mobileser.userDetails.uId, pId: product.pId }).subscribe((res:any)=>{
      //  alert("item successfully added")
       this.toaster.success("Product is added to cart...")
       setTimeout(() => {
  
       }, 400);
     }, (error: any) => {
      alert(error.message);
     });
  }
 wishlist(product:any){
    this.mobileser.saveWishlist({uId: this.mobileser.userDetails.uId,  pId: product.pId }).subscribe((res:any)=>{
      this.toaster.success("Product is added to Wishlist...")
      setTimeout(() => {
 
      }, 400);
     }, (error: any) => {
      alert(error.message);
     });
  }
  onLogout():void {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
  
}