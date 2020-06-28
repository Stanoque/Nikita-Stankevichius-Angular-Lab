import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonBodyComponent } from './pokemon-body/pokemon-body.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';



@NgModule({
  declarations: [PokemonCardComponent, PokemonBodyComponent, PokemonHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
