import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes:string [] = ['Spider man','Iron man','Hulk','Thor'];
  heroeBorrado:string= '';
  borrarHeroe():void{
      console.log('borrando....');
      this.heroeBorrado = this.heroes?.pop()||'';
  }
}
