import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
// import { delay } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  apiRouteBlockId = '/v1/block/id/';
  apiRouteBlockNum = '/v1/block/number/';
  apiRouteTx = '/v1/transaction/id/';
  mobile: boolean;
  item: any;
  isNotFound: number;
  loading: boolean;

  constructor(private data: ApiService, private router: Router) {
    this.mobile = false;
  }

  ngOnInit() {
    if (window.screen.width <= 425) {
      // 768px portrait
      this.mobile = true;
    }

    this.initSearch();
  }

  initSearch() {
    this.isNotFound = 0;
    this.loading = false;
    this.item = undefined;
  }

  searchItem() {
    this.loading = true;

    if (this.item.length > 16) {
      this.getBlock_hash(this.item.trim());
      this.getTxn_hash(this.item.trim());
    } else {
      this.getBlock_number(this.item.trim());
    }

    setTimeout(() => {
      if (this.loading) {
        this.router.navigateByUrl(`${'404'}`);
      }
    }, 6000);
  }

  getBlock_number(blockNumber: number): any {
    this.data.Request(this.apiRouteBlockNum + blockNumber).subscribe((res) => {
      if (res.id) {
        this.initSearch();
        this.router.navigateByUrl(`block/number/${res.blockNumber}`);
      } else {
        this.router.navigateByUrl(`${'404'}`);
      }
    });
  }

  getBlock_hash(blockId: string): any {
    this.data.Request(this.apiRouteBlockId + blockId.trim()).subscribe((res) => {
      if (res.id) {
        this.initSearch();
        this.router.navigateByUrl(`block/${res.id}`);
      } else {
        this.notFound();
      }
    });
  }

  getTxn_hash(hash: string): any {
    this.data.Request(this.apiRouteTx + hash.trim()).subscribe((res) => {
      if (res.txHash) {
        this.initSearch();
        this.router.navigateByUrl(`transaction/${res.txHash}`);
      } else {
        this.notFound();
      }
    });
  }

  notFound(): any {
    this.isNotFound++;
    console.log(this.isNotFound)
    if (this.isNotFound === 2) {
      this.router.navigateByUrl(`${'404'}`);
    }
  }

  focusFunction() {
    document
      .getElementById('searchIcon')
      .setAttribute('src', '../../../assets/img/right-arrowGreen.svg');
  }

  focusOutFunction() {
    document
      .getElementById('searchIcon')
      .setAttribute('src', '../../../assets/img/right-arrow.svg');
  }
}
