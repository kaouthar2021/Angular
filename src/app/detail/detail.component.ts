import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   @Input() cont: number|undefined;
   @Input() desc:string|undefined;

   affichage=false;
   contenu="Voir+";
   affich(){
     if(this.affichage){
       this.affichage=false;
       this.contenu="voir+";


     }else{
       this.affichage=true;
       this.contenu="voir-";
       setTimeout(
         ()=>{
           this.affichage=false;

         },5000

       )
     }
   }
  constructor() { }

  ngOnInit(): void {
  }

}
