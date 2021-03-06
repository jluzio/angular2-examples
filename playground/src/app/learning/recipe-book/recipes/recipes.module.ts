import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { RecipesRoutingModule } from './recipes-routing.module'
import { SharedModule } from './../shared/shared.module'

import { RecipeItemComponent } from './recipe-list/recipe-item.component'
import { RecipeStartComponent } from './recipe-start.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { RecipesComponent } from './recipes.component'
import { CommentListComponent } from '../comments/comment-list/comment-list.component'
import { CommentItemComponent } from '../comments/comment-list/comment-item.component'
import { IngredientDialogComponent } from './recipe-edit/ingredient-dialog.component'

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    RecipesComponent,
    CommentListComponent,
    CommentItemComponent,
    IngredientDialogComponent
  ],
  imports: [
    // CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
