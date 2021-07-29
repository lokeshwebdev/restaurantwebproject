import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurantwebsite';



  classname="";
  myFunction() {

    if(this.classname=='menustyle'){
      this.classname='';
    }
    else
   this.classname='menustyle';
     
 }
 
 itemprice1="$1.99";
 itemprice2="$3.99";
 itemname1="Tacos";
 itemname2="Kombucha";
 newbg="";

tacosFunction() {   
  this.itemprice1="$1.99";
  this.itemprice2="$3.99";
  this.itemname1="Tacos";
  this.itemname2="Kombucha";
  this.newbg="url(https://c8.alamy.com/comp/RF0CMY/mexican-tacos-with-chicken-meat-corn-and-tomato-sauce-latin-american-cuisine-taco-tortilla-wrap-banner-top-view-flat-lay-RF0CMY.jpg)";
    
}
/*************************/

 
beersFunction() {   
  this.itemprice1="$2.99";
  this.itemprice2="$4.99";
  this.itemname1="Beers";
  this.itemname2="Snaks";
  this.newbg="url(https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-tmall-beer-festival-e-commerce-carnival-banner-image_193689.jpg)";
    
}


winesFunction() {   
  this.itemprice1="$3.99";
  this.itemprice2="$5.99";
  this.itemname1="Wines";
  this.itemname2="Lunch";
  this.newbg="url(https://previews.123rf.com/images/belchonock/belchonock2006/belchonock200606874/149498618-set-with-glasses-and-bottles-of-red-wine-banner-design.jpg)";
    
}


dessertsFunction() {   
  this.itemprice1="$4.99";
  this.itemprice2="$6.99";
  this.itemname1="Fudgy Chewy Brownies";
  this.itemname2="Coconut Kheer";
  this.newbg="url(https://media.istockphoto.com/vectors/indian-cuisine-lunch-with-dessert-cartoon-icon-vector-id826552552?k=6&m=826552552&s=612x612&w=0&h=zEx2uGuHEtyspM-TWznJJ-h1tmlWJI58tecXrRhZLWQ=)";
    
}
reservationsFunction() {   
  this.itemprice1="$5.99";
  this.itemprice2="$7.99";
  this.itemname1="Table No. 8";
  this.itemname2="Table No. 22"; 
  this.newbg="url(https://thumbs.dreamstime.com/z/vector-banner-isometric-table-reservation-cafe-concept-view-chairs-napkins-modern-design-interior-online-reserved-180796804.jpg)";
    
}

}
