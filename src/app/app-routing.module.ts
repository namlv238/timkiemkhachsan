
import { DeltailRoomComponent } from './client/our_rooms/deltail-room/deltail-room.component';
import { OurRoomsComponent } from './client/our_rooms/our-rooms/our-rooms.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ClientmainComponent } from './client/clientmain/clientmain.component';
import { HomeComponent } from './client/Home/home/home.component';
import { HotelDetailsComponent } from './client/our-hotel/hotel-details/hotel-details.component';
import { OurHotelComponent } from './client/our-hotel/our-hotels/our-hotel.component';



const routes: Routes = [
  {
    path: '', component: ClientmainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent } ,
      {path: 'rooms-our', component: OurRoomsComponent },
      {path: 'rooms-detail', component: DeltailRoomComponent},
      {path: 'hotel-details', component: HotelDetailsComponent},
      {path: 'our-hotel', component: OurHotelComponent} 
           
      
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
