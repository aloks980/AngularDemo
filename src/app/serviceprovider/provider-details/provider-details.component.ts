import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/model/provider';
import { ProviderService } from 'src/app/provider.service';

import * as jspdf from 'jspdf'; 
 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {

  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }

  provider:Provider;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.provider = this.service.getSelectedProvider();
    if(!this.provider)
    {
      this.router.navigate(['serviceproviders']);
    }
    console.log(this.provider);
  });
    
  }
  generatePdf(name:String){
var data = document.getElementById('provider');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 200;
var pageHeight = 250;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 10;
pdf.addImage(contentDataURL, 'PNG', 2, position, imgWidth, imgHeight)
pdf.save(name+'.pdf'); // Generated PDF
});
}

}
