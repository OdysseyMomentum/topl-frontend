import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-unconfirmed-details",
  templateUrl: "./unconfirmed-details.component.html",
  styleUrls: ["./unconfirmed-details.component.scss"],
})
export class UnconfirmedDetailsComponent implements OnInit {
  apiRoute = '/v1/transaction/unconfirmed/id/'
  txnDetails: any;
  txnHash: any;
  truncateMiddle = require("truncate-middle");

  constructor(
    private route: ActivatedRoute,
    private data: ApiService,
    private router: Router,
    public toastr: ToastrManager
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getTxn_hash(params.id);
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

  getTxn_hash(hash): any {
    this.data.Request(this.apiRoute + hash).subscribe((res) => {
      if (res) {
        res.signatures = Object.entries(res.signatures)
        console.log(res)
        this.txnDetails = res
      } else {
        this.router.navigateByUrl('/404');
      }
    });
  }

  clickAddress(id): any {
    //this.router.navigateByUrl(`${"address"}/${id}`);
  }
}
