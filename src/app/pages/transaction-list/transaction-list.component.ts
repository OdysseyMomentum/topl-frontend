import { Component, OnInit, OnDestroy } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-transactions",
  templateUrl: "./transaction-list.component.html",
  styleUrls: ["./transaction-list.component.scss"],
})
export class TransactionsComponent implements OnInit, OnDestroy {
  apiRoute = '/v1/transaction/list/latest/page/'
  size = 20;
  txnBatch: Array<any>;
  page = 1;
  loading: boolean;
  truncateMiddle = require("truncate-middle");

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    //this.getTxns(this.page);
    this.getWhiteflagMessages();
  }

  ngOnDestroy() {}

  // send message to whiteflag/topl-bifrost
  getWhiteflagMessages(): any {
    this.loading = true;
    this.api.Request('/messages?blockchain=topl-testnet')
      .subscribe(res => {
        console.log("data received...", res);
        this.loading = false
      });
  }

  // getTxns(pageNum): any {
  //   this.loading = true;
  //   this.api
  //     .Request(`${this.apiRoute}${pageNum}?size=${this.size}`)
  //     .subscribe((txns) => {
  //       this.txnBatch = txns;
  //       this.loading = false
  //     });
  // }

  // next() {
  //   this.page = this.page + Number(1);
  //   this.getTxns(this.page);
  // }

  // prev() {
  //   if (this.page > 1) {
  //     this.page = this.page - Number(1);
  //     this.getTxns(this.page);
  //   }
  // }

  // clickdetails(id: String): any {
  //   this.router.navigateByUrl(`${"transaction"}/${id}`);
  // }
}
