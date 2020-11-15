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
    //this.getTxns(this.page);
    this.getWhiteflagMessages();
  }

  ngOnDestroy() {}

  // get messages to whiteflag/topl-bifrost
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
  /**
   * _id: "5fb0d85da9e6562b4096761d"
   * MessageBody
   * DateTime: "2020-11-15T07:27:22Z"
   * ObjectLatitude: "+29.76017"
      ObjectLongitude: "-095.36937"
   * SubjectCode: "21"

   MetaHeader:
   transactionHash: "4vMzdy2GwNiNuCAYNx9gTaKwiuB1WAXTn2ogHKQReDEZ"
   * 
   * MessageBody:
DateTime: "2020-11-15T07:27:22Z"
Duration: "P00D00H00M"
ObjectLatitude: "+29.76017"
ObjectLongitude: "-095.36937"
ObjectOrientation: "000"
ObjectSizeDim1: "0000"
ObjectSizeDim2: "0000"
ObjectType: "15"
SubjectCode: "21"
__proto__: Object
MessageHeader:
DuressIndicator: "0"
EncryptionIndicator: "0"
MessageCode: "M"
Prefix: "WF"
ReferenceIndicator: "0"
ReferencedMessage: "0000000000000000000000000000000000000000000000000000000000000000"
Version: "1"
__proto__: Object
MetaHeader:
blockNumber: 42
blockchain: "topl-testnet"
encodedMessage: "574631302680000000000000000000000000000000000000000000000000000000000000000109010088a8393910000000aca5d805c12a6d26e00000000000"
formatValid: true
originatorAddress: "5JJquNw481t6ch3jn7maTZMmP6Suva19sdmQZ1ZNco7fzJmmGx9"
transactionHash: "4vMzdy2GwNiNuCAYNx9gTaKwiuB1WAXTn2ogHKQReDEZ"
transceiveDirection: "TX"
transmissionSuccess: true
__proto__: Object
_id: "5fb0d85da9e6562b4096761d"
_modified: "2020-11-15T07:27:25.413Z"
__proto__: Object
length: 1
__proto__: Array(0)


   * 
   * 
   * {
                        "const": "72",
                        "description": "Peace Operation - Peacemaking",
                        "allowedObjectTypes": [ "0*", "1*", "2*", "3*", "4*", "5*", "6*", "7*", "8*" ]
                    },
                    {
                        "const": "21",
                        "description": "Humanitarian Law - Monitoring",
                        "allowedObjectTypes": [ "0*", "1*", "2*", "3*", "4*", "5*", "6*", "7*", "8*" ]
                    },
   */

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
