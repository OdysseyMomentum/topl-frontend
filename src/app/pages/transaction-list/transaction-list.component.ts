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
  peaceCredits: number;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.getWhiteflagMessages();
  }

  ngOnDestroy() {}

  // get messages from whiteflag/topl-bifrost
  getWhiteflagMessages(): any {
    this.loading = true;
    this.api.Request('/messages?blockchain=topl-testnet')
      .subscribe(res => {
        console.log("data received...", res);
        this.txnBatch = res.data;
        this.peaceCredits = res.data.length;
        this.loading = false
      });
  }

  //use this in 2-way binding
  getCodeMessage(code) {
    if(code==="21"){
      return "Peace Operation - Peacemaking";
    }
    return "Humanitarian Law - Monitoring";
  }
}
