import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-pendingverification',
  templateUrl: './pendingverification.component.html',
  styleUrls: ['./pendingverification.component.scss']
})
export class PendingverificationComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applicationList;
  filterApplicationList;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'applyPosition', 'availableStartDate', 'currentEmploymentStatus', 'action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(public dialog: MatDialog,
    protected http: HttpClient) { }

  ngOnInit() {
    this.getApplication();
  }

  getApplication() {
    return this.http
      .get<any>(environment.baseApiUrl + 'application').subscribe(res => {
        this.applicationList = res.filter(x => x.status === 'submit');
        this.dataSource = new MatTableDataSource(this.applicationList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  openDialog(e, a) {
    let request = {
      ...a,
      status: e
    };
    return this.http
      .post<any>(environment.baseApiUrl + 'application/updateApplication', request).subscribe(res => {
        this.getApplication();
      });
  }

  Searchname(value) {
    console.log("test");
    this.filterApplicationList = this.applicationList;
    this.filterApplicationList = this.filterApplicationList.filter(x => x.firstName === value);
    console.log(this.filterApplicationList);
    this.dataSource = new MatTableDataSource(this.filterApplicationList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

