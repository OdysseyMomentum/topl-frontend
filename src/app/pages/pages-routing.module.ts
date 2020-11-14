import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlockListComponent } from './block-list/block-list.component';
import { TransactionsComponent } from './transaction-list/transaction-list.component';
import { BlockDetailsComponent } from './block-details/block-details.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { UnconfirmedDetailsComponent } from './unconfirmed-details/unconfirmed-details.component';
import { AddressComponent } from './address/address.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'blocks', component: BlockListComponent },
  { path: 'missions', component: TransactionsComponent },
  { path: 'block/:id', component: BlockDetailsComponent },
  { path: 'block/number/:num', component: BlockDetailsComponent },
  { path: 'unconfirmed/:id', component: UnconfirmedDetailsComponent },
  { path: 'mission/:id', component: TransactionDetailsComponent },
  { path: 'address/:id', component: AddressComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
