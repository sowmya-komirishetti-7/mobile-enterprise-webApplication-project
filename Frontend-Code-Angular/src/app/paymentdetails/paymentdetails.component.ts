import { Component, OnInit } from '@angular/core';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit{

  constructor(private mobileser:MobileserviceService){
    
  }
  ngOnInit(): void {
    
  }




  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "",                // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "IcOnNeCt",
    "description": "Test Transaction",
    "image": "/assets/logo.jpeg",
    "order_id": "",                   //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://goodluckhours.com/payment-successful/",
    "prefill": {
      "name": this.mobileser.userDetails.uName,
      "email": this.mobileser.userDetails.uEmail,
      "contact": this.mobileser.userDetails.uPhn,
    },
    "notes": {
      "address": "Near cornak theater,Dilsuknagar, Hyderabad, Telangana 500097."
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  rzp1: any;
  pay(total: any) {
    this.options.amount = total;
    this.rzp1 = new this.mobileser.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }
}
