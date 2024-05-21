import { Component, Input } from '@angular/core';
import {Recette} from '../../../models/recette'
import {RecettesService} from '../../../services/recettes.service'

@Component({
  selector: 'app-recettes-list',
  standalone: true,
  imports: [],
  templateUrl: './recettes-list.component.html',
  styleUrl: './recettes-list.component.scss'
})
export class RecettesListComponent {
  @Input()
  recettes: Recette[];

  constructor(private recettesService: RecettesService){}
  ngOnInit(){
    this.recettesService.getAll().subscribe(recettes => {
            this.recettes = recettes/*, console.log(this.articles)*/;
          });
  }

}
