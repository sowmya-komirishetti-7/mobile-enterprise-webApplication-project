import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // title: string;
    // description: string;
    role: Number;
    public selectedindex: number = 0;
    public images = ['.../../assets/Images/home2.jpg', '.../../assets/Images/home1..jpg', '../../assets/Images/home4.jpg'];
    
    selectImage(index: number) {
      console.log("Index: " + index);
      this.selectedindex = index;
      console.log("Selected Index: " + this.selectedindex);
    }
  
    showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        (<HTMLElement>slides[i]).style.display = "none";
        // setTimeout(() => this.showSlides(), 2000)
      }
      this.selectedindex++;
      if (this.selectedindex > slides.length) { this.selectedindex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        // setTimeout(() => this.showSlides(), 2000)
      }
      (<HTMLElement>slides[this.selectedindex - 1]).style.display = "block";
      dots[this.selectedindex - 1].className += " active";
      setTimeout(() => this.showSlides(), 2000)
    }
  
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router) {
      this.role = 1;
  
    }
  
    ngOnInit() { 
        this.showSlides();
     }

    }


