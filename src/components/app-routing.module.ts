import { FormsComponent } from './forms/forms.component';
import { PipesDirectivesComponent } from './pipes-directives/pipes-directives.component';
import { BindingComponent } from './binding/binding.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from './shared/routes.enum';

const routes: Routes = [
  {
    path: RoutesEnum.HELLO_WORLD,
    component: HelloWorldComponent,
  },
  {
    path: RoutesEnum.BINDING,
    component: BindingComponent,
  },
  {
    path: RoutesEnum.PIPES_DIRECTIVES,
    component: PipesDirectivesComponent,
  },
  {
    path: RoutesEnum.FORMS,
    component: FormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
