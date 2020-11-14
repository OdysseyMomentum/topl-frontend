import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  truncateMiddle = require('truncate-middle');
  publicKey: any;
  txnDetails: any;
  txns: any;
  txns_length: any;


  constructor(private route: ActivatedRoute, private data: ApiService, private router: Router, public toastr: ToastrManager) {
    this.route.params.subscribe(params => {
      console.log('txHash', params.id);
      this.publicKey = params.id;
      this.getTxn_public_key(this.publicKey);
    });
  }

  ngOnInit() {
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
    this.toastr.successToastr('Copied to Clipboard', 'Success!');
  }

  showCustom() {
    this.toastr.customToastr(
      '"<span style="color: #18A08E; font-size: 18px; text-align: center; ">Copied to Clipboard</span>"',
        null,
        { enableHTML: true }
    );
  }

  getTxn_public_key(hash): any {

    this.data.Request('transaction_by_hash')
      .subscribe(e => {
        console.log('res is ', e);
        if (e.result) {
          this.txnDetails = e.result;
          console.log(this.txnDetails);
          this.txns = this.txnDetails.to;
          console.log('txns', this.txns);
          this.txns_length = this.txns.length;
        } else {
          const myurl = `${'dashboard'}`;
          this.router.navigateByUrl(myurl);
        }
      });
  }

}
