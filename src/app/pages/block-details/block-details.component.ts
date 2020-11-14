import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-block-details",
  templateUrl: "./block-details.component.html",
  styleUrls: ["./block-details.component.scss"],
})
export class BlockDetailsComponent implements OnInit {
  apiRouteById = '/v1/block/id/'
  apiRouteByNum = '/v1/block/number/'
  mobile: boolean;
  blockId: string;
  blockNumber: number;
  blockDetails: any;
  txns: any;
  truncateMiddle = require("truncate-middle");

  constructor(
    private route: ActivatedRoute,
    private data: ApiService,
    private router: Router,
    public toastr: ToastrManager
  ) {
    this.mobile = false;
  }

  ngOnInit() {
    if (window.screen.width <= 425) {
      // 768px portrait
      this.mobile = true;
    }

    this.route.params.subscribe((params) => {
      if (this.route.toString().includes('number')) {
        this.getByNumber(params.num)
      } else {
        this.getById(params.id)
      }
    });
  }

  copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    this.showCustom();
    $temp.remove();
  }

  showSuccess() {
    this.toastr.successToastr("Copied to Clipboard", "Success!");
  }

  showCustom() {
    this.toastr.customToastr(
      '"<span style="color: #18A08E; font-size: 18px; text-align: center; ">Copied to Clipboard</span>"',
      null,
      { enableHTML: true }
    );
  }

  getById(blockId: String): any {
    this.data.Request(this.apiRouteById + blockId).subscribe(res => {
      if (res) {
        this.recordBlock(res)
      } else {
        this.router.navigateByUrl('/404')
      }
    });
  }

  getByNumber(blockNumber: Number): any {
    this.data.Request(this.apiRouteByNum + blockNumber).subscribe(res => {
      if (res) {
        this.recordBlock(res)
      } else {
        this.router.navigateByUrl('/404')
      }
    });
  }

  recordBlock(block: any): any {
    this.blockDetails = block;
    this.txns = block.txs;
    this.blockNumber = block.blockNumber;
    this.blockId = block.id
  }

  clickdetails(id: string): any {
    this.router.navigateByUrl(`${"transaction"}/${id}`);
  }

  next(): any {
    this.router.navigateByUrl(`${"block/number/"}${Number(this.blockNumber) + Number(1)}`);
  }

  prev(): any {
    this.router.navigateByUrl(`${"block/number/"}${Number(this.blockNumber) - Number(1)}`);
  }
}