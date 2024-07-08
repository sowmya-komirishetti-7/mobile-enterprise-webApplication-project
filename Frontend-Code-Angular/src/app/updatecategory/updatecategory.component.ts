import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent  implements OnInit{

  pcId:any;
  pcName:any;
  
  
  @ViewChild('updateForm') updateForm: NgForm | undefined;
  constructor(private router:Router, private empser:MobileserviceService, private route:ActivatedRoute){ 
    this.pcId = this.route.snapshot.paramMap.get('pcId');
    this.getCategoryById();
  }

  ngOnInit(): void {
    
    
  }
 updateCategory(catObj:any){
  console.log(catObj);
     
     this.empser.updateCategory(catObj).subscribe((response:any)=>{
      this.router.navigateByUrl("categorytable");
     });

 }
 getCategoryById(){
  this.empser.getCategorytById(this.pcId).subscribe((response:any)=>{
    this.pcId=this.pcId;
    this.pcName=this.pcName;
    
    
    this.updateForm?.setValue(response);
  })

}
}


