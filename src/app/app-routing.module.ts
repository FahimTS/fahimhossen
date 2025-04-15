import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent } // এখানে সব section থাকছে
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',   // ✅ must
    scrollPositionRestoration: 'enabled', // optional but helpful
    scrollOffset: [0, 60]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
