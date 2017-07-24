import { FishPageComponent } from './components/fish-page/fish-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FishThumbnailComponent } from './components/fish-thumbnail/fish-thumbnail.component';
import { FishListService } from './components/fish-list/fish-list.service';
import { FishListComponent } from './components/fish-list/fish-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavBarComponent,
        SideBarComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        FishListComponent,
        FishThumbnailComponent,
        FishPageComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'fish-list', component: FishListComponent },
            { path: 'fish-page/:id/:species', component: FishPageComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        FishListService
    ]
};
