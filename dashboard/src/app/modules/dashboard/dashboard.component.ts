import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalDraft = "0";
  totalSubmit = "0";
  totalApprove = "0";
  totalReturn = "0";
  constructor(
    protected http: HttpClient) { }

  ngOnInit(): void {
    this.getApplicationDashboard();
  }

  getApplicationDashboard() {
    return this.http
      .get<any>(environment.baseApiUrl + 'application/getApplicationDashboard').subscribe(res => {
        this.totalDraft = res.draft;
        this.totalSubmit = res.submit;
        this.totalApprove = res.approve;
        this.totalReturn = res.return;
      });
  }
}
