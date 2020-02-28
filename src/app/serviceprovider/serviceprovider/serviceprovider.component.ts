import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../provider.service';
import { Provider } from 'src/app/model/provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serviceprovider',
  templateUrl: './serviceprovider.component.html',
  styleUrls: ['./serviceprovider.component.css']
})
export class ServiceproviderComponent implements OnInit {

  constructor(private service: ProviderService, private router: Router) { }

  providers:Provider[];
  sortingType:String="price";
  searchText:string='';
  

  ngOnInit(): void {
    this.service.getData().subscribe(data=>{
      this.providers = data;   
      this.sortByPrice(this.providers);
      this.service.setSelectedProvider(this.providers[0]);
        this.router.navigate(['serviceproviders', this.providers[0].name]);
      
      console.log(this.providers);
    })
  }

  sortBy(){
    if(this.sortingType === "price"){
      this.sortByPrice(this.providers);
    }else{
      this.sortByRating(this.providers);
    }
  }

  sortByPrice(providers:Provider[]){
    providers.sort((a,b) => {
      return a.lowestPrice - b.lowestPrice;
    });  
  }
  
  sortByRating(providers:Provider[]){
    providers.sort((a,b) => {
      return b.rating - a.rating;
    });
  }
  showDetail(provider:Provider){
    this.service.setSelectedProvider(provider);
      this.router.navigate(['serviceproviders', provider.name]);
    
  }

}
