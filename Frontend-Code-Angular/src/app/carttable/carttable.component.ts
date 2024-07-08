import { Component, OnInit } from '@angular/core';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-carttable',
  templateUrl: './carttable.component.html',
  styleUrls: ['./carttable.component.css']
})
export class CarttableComponent implements OnInit{
  Cart:any;
  constructor(private mobileser:MobileserviceService) {}

  ngOnInit(): void {
    this.getAllCart();
    
  }
  
  getAllCart(){
    return this.mobileser.getAllCart().subscribe((data:any)=>{
      this.Cart=data;
      console.log(data);
    })
    
  }
  // deleteCart(cartId:string){
  //   if(!(confirm('Are you sure you want to delete this cart id'))) {
  //     //return false;
  //   } 
  //   else{
      
  //      this.mobileser.deleteCart(cartId).subscribe((response: string)=>{
  //       alert(response);
  //      this.getAllCart();
  //    });
  //   }
     
  // }
}


