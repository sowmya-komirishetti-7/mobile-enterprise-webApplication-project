import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MobileserviceService } from '../mobileservice.service';
import { User } from '../user';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {
  user: User= new User();
  paymentHandler: any = null;
 
  success: boolean = false
  
  failure:boolean = false
  customerinfo:any;
  uName = localStorage.getItem('uName');
  uEmail = localStorage.getItem('uEmail');
  uPhn = localStorage.getItem('uPhn');
  uAddress = localStorage.getItem('uAddress');
  price:any;
  amount:any;
// totalAmount:AddtocartComponent|number;
  constructor(private checkout: MobileserviceService, private router:Router,private authService: SocialAuthService)  {}
  
  ngOnInit() {
    this.invokeStripe();
    if (localStorage.getItem('price') != null) {
      this.price = localStorage.getItem('price');
    
    }
  }
  
 
  makePayment() {
    var amount = this.price;
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MbGPwSDVjq4Eg7BbPtIQ5YuP0QkUJUNPy4d3CoxJrXfTlTx2c5oHnH8QlnuiE81mCkRhHLcW3fuZPoAoiOfPu07008EFmkVBl',
      locale: 'auto',
      token: function (stripeToken: any) {
        Swal.fire('Thank you...', 'Payment succesful!', 'success')
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },

});
 
const paymentstripe = (stripeToken: any) => {
  this.checkout.makePayment(stripeToken).subscribe((data: any) => {
    console.log(data);
    if (data.data === "success") {
      alert("success")
      this.success = true
    }
    else {
      this.failure = true
      
    }
  });
};
paymentHandler.open({
  name: 'iCoNnEcT',
  description: 'This is secure & safety payment',
  amount: amount ,
});
}

invokeStripe() {
if (!window.document.getElementById('stripe-script')) {
  const script = window.document.createElement('script');
  script.id = 'stripe-script';
  script.type = 'text/javascript';
  script.src = 'https://checkout.stripe.com/checkout.js';
  script.onload = () => {
    this.paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MbGPwSDVjq4Eg7BbPtIQ5YuP0QkUJUNPy4d3CoxJrXfTlTx2c5oHnH8QlnuiE81mCkRhHLcW3fuZPoAoiOfPu07008EFmkVBl',
      locale: 'auto',
      token: function (stripeToken: any) {
        
        console.log(stripeToken);
      },
    });
  };

  window.document.body.appendChild(script);
}
}
onLogout():void {
  this.authService.signOut();
  this.router.navigate(['/login']);
}
}
