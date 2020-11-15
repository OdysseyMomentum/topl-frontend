import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { BlockListComponent } from './block-list/block-list.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { MapComponent } from '../components/map/map.component';
import { TransactionsComponent } from './transaction-list/transaction-list.component';
import { BlockDetailsComponent } from './block-details/block-details.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { UnconfirmedDetailsComponent } from './unconfirmed-details/unconfirmed-details.component';
import { AddressComponent } from './address/address.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MissionFormComponent } from '../components/mission-form/mission-form.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    DashboardComponent,
    BlockListComponent,
    TransactionsComponent,
    BlockDetailsComponent,
    TransactionDetailsComponent,
    UnconfirmedDetailsComponent,
    AddressComponent,
    NotFoundComponent,
    MapComponent,
    MissionFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule {
}
