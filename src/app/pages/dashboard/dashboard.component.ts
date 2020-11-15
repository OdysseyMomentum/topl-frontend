import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
  blockHeight: number;
  avgBlockDelay: number;
  blockBatch: Array<any>;
  unconfirmedTxns: Array<any>;
  mobile: boolean;
  refresh: any;
  truncateMiddle = require("truncate-middle");

  constructor(private data: ApiService, private router: Router) {
    this.mobile = false;
  }

  ngOnInit() {
    if (window.screen.width <= 425) { // 768px portrait
      this.mobile = true;
    }

  }

  ngOnDestroy() {
    if (this.refresh) {
      clearInterval(this.refresh);
    }
  }

  refreshList() {
    this.refresh = setInterval(() => {
      this.getBlockHeight();
    }, 5000);
  }

  // get block height
  getBlockHeight(): any {
    this.data.Request('/v1/network/height')
      .subscribe(res => {
        if (this.blockHeight !== res.height) {
          this.getBlocks(res.height);
          this.getUnconfirmedTxns();
          this.getAvgBlockDelay();
          this.blockHeight = res.height
        }
      });
  }

  // get avg block delay
  getAvgBlockDelay(): any {
    this.data.Request('/v1/network/blocktime')
      .subscribe(res => {
        this.avgBlockDelay = res.blockTime;
      });
  }

  getBlocks(start): any {
    this.data.Request(`/v1/block/list?start=${start}&size=10`)
        .subscribe(blocks => {
          this.blockBatch = blocks;
        });
  }

  getUnconfirmedTxns(): any {
    this.data.Request('/v1/transaction/unconfirmed')
      .subscribe(txns => {
        this.unconfirmedTxns = txns;
      });
  }

  clickBlock(id): any {
    this.router.navigateByUrl(`${'block'}/${id}`);
  }

  clickMempool(id): any {
    this.router.navigateByUrl(`${'unconfirmed'}/${id}`);
  }
}
