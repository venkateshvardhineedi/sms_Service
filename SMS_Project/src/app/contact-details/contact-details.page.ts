import { Component, OnInit } from '@angular/core';
import {SMS } from '@ionic-native/sms/ngx';



import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {
 // Contact_Number: string;
 //public  todo: FormGroup;
  constructor( public sms:SMS) {
  
   }

  ngOnInit() {
  }

  sendsms(data):any{
    alert(data);

    console.log("executing");
    console.log(data);
    
    //console.log("entered");
    //console.log(data.Contact_Number);
    this.sms.send('8332058456','Jesus is my god');
  }

  

}
