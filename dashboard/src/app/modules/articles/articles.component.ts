import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applicationList;
  filterApplicationList;
  constructor(
    protected http: HttpClient) { }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'applyPosition', 'availableStartDate', 'currentEmploymentStatus'];
  dataSource = new MatTableDataSource();

  ngOnInit() {
    this.getApplication();
  }

  getApplication() {
    return this.http
      .get<any>(environment.baseApiUrl + 'application').subscribe(res => {
        this.applicationList = res;
        this.dataSource = new MatTableDataSource(this.applicationList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  filter(value) {
    console.log(value);
    this.filterApplicationList = this.applicationList;
    this.filterApplicationList = this.filterApplicationList.filter(x => x.status === value);
    console.log(this.filterApplicationList);
    this.dataSource = new MatTableDataSource(this.filterApplicationList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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