import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';
function _window():any{
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class MobileserviceService {
  get nativeWindow():any{
    return _window();
  }
  
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  userDetails: any;
  amount: any;
  //nativeWindow: any;

  
  

  constructor(private httpClient:HttpClient) { }
  makePayment(stripeToken: any): Observable<any>{
    const url = "http://localhost:5000/checkout/"
 
    return this.httpClient.post<any>(url,{token:stripeToken})
  }
  createUser(userObj: User): Observable<any> { 
    return this.httpClient.post( '/user/list', userObj, {responseType:'text'});
  }
  getAllProducts(){
    return this.httpClient.get("/product/list");
   }
   
   saveProduct(proObj:any){
    return this.httpClient.post("/product/list",proObj);
   }
   getProductById(proId:number){
    return this.httpClient.get("/product/list/" + proId);
   }
   updateProduct(proObj:any){
    return this.httpClient.put("/product/list",proObj);
   }
   deleteProduct(proId:string){
    return this.httpClient.delete("/product/list/" + proId,{responseType : 'text'});
   }


  // getAllUsers() {
  //   return this.httpClient.get( '/user/list');
  // }
  getAllCategory(){
    return this.httpClient.get("/category/list");
   }
   
   saveCategory(catObj:any){
    return this.httpClient.post("/category/list",catObj);
   }
   getCategorytById(catId:string){
    return this.httpClient.get("/category/list/" + catId);
   }
   updateCategory(catObj:any){
    return this.httpClient.put("/category/list",catObj);
   }
   deleteCategory(catId:string){
    return this.httpClient.delete("/category/list/" + catId,{responseType : 'text'});
   }
   getAllUsers() {
    return this.httpClient.get( '/user/list');
  }

  saveUser(uObj:any){
    return this.httpClient.post("/user/list",uObj);
   }
   getUserById(uId:string){
    return this.httpClient.get("/user/list/" + uId);
   }
   updateUser(uObj:any){
    return this.httpClient.put("/user/list",uObj);
   }
   deleteUser(uId:string){
    return this.httpClient.delete("/user/list/" + uId,{responseType : 'text'});
   }
   //cart
   getAllCart(){
    return this.httpClient.get("/cart/list");
   }
   
   saveCart(cartObj:any){
    return this.httpClient.post("/cart/list",cartObj);
   }
   getCartById(cartId:string){
    return this.httpClient.get("/cart/list/" + cartId);
   }
  //  updateCart(cartObj:any){
  //   return this.httpClient.put("/cart/list",cartObj);
  //  }
    deleteCart(cartId:string){
    return this.httpClient.delete("/cart/list/" + cartId,{responseType : 'text'});
    }
    // wishlist
    getAllWishlist(){
      return this.httpClient.get("/wishlist/list");
     }
     
     saveWishlist(wlObj:any){
      return this.httpClient.post("/wishlist/list",wlObj);
     }
     getWishlistById(wlId:string){
      return this.httpClient.get("/wishlist/list/" + wlId);
     }
    //  updateCart(cartObj:any){
    //   return this.httpClient.put("/cart/list",cartObj);
    //  }
      deleteWishlist(wlId:string){
      return this.httpClient.delete("/wishlist/list/" + wlId,{responseType : 'text'});
      }
  
  
  
  getProductlist(){
    return this.productList.asObservable();
  }

  setProductlist(product : any){
    this.cartItemList.push(product);
    this.productList.next(product);
  }
  addtoCart(product :any) {
    return this.cartItemList.push(product);
    //this.productList.next(this.cartItemList);
    // console.log(this.cartItemList)
  }
  
  removeCartItem(productlist: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(productlist.pId=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  getUser(){
    return this.userDetails;
  }
  setAmount(amount:any){
    this.amount=amount;
  }
  getAmount(){
    return this.amount;
  }
  
  
  
  
}

  



  

  