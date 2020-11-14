import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-block-list",
  templateUrl: "./block-list.component.html",
  styleUrls: ["./block-list.component.scss"],
})
export class BlockListComponent implements OnInit, OnDestroy {
  blockBatch: any;
  page: number = 1;
  apiRoute = '/v1/block/list/summary/page/';
  size = 20;
  truncateMiddle = require("truncate-middle");

  constructor(private data: ApiService, private router: Router) {}

  ngOnInit() {
    this.getBlocks(this.page);
  }

  ngOnDestroy() {}

  getBlocks(pageNum): any {
    this.data.Request(`${this.apiRoute}${pageNum}?size=${this.size}`)
        .subscribe(blocks => {
          this.blockBatch = blocks;
        });
  }

  next() {
    this.page = this.page + Number(1);
    this.getBlocks(this.page);
  }

  prev() {
    if (this.page > 1) {
      this.page = this.page - Number(1);
      this.getBlocks(this.page);
    }
    if (this.page === 1) {
      this.getBlocks(this.page);
    }
  }

  clickdetails(id: String): any {
    this.router.navigateByUrl(`${"block"}/${id}`);
  }
}
