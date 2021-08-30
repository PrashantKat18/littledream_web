import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  },
  {
    path:'gallery', 
    loadChildren: () => import('./components/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path:'events', 
    loadChildren: () => import('./components/events/events.module').then(m => m.EventsModule)
  },
  {
    path:'contact', 
    loadChildren: () => import('./components/contactus/contactus.module').then(m => m.ContactusModule)
  },
  {
    path:'', redirectTo: '/home', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
