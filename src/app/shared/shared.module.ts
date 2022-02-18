import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { CardplayerComponent } from './components/cardplayer/cardplayer.component';
import { SectiongenericComponent } from './components/sectiongeneric/sectiongeneric.component';
import { PlaylistheaderComponent } from './components/playlistheader/playlistheader.component';
import { PlaylistbodyComponent } from './components/playlistbody/playlistbody.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';

@NgModule({
  declarations: [
    SidebarComponent, 
    MediaplayerComponent, 
    HeaderuserComponent, 
    CardplayerComponent, 
    SectiongenericComponent, 
    PlaylistheaderComponent, 
    PlaylistbodyComponent, 
    OrderListPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardplayerComponent,
    SectiongenericComponent,
    PlaylistheaderComponent, 
    PlaylistbodyComponent,
    OrderListPipe
  ]
})
export class SharedModule { }
