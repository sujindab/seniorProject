import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-logg',
  templateUrl: './logg.component.html',
  styleUrls: ['./logg.component.css']
})

export class LoggComponent implements OnInit, AfterViewInit{
  LogArray:any[] = [];

  
  constructor(private http: HttpClient, private el: ElementRef) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/getLogActibity').subscribe(result=>{
      this.LogArray = result;
      this.LogArray.reverse();
      console.log(this.LogArray)
    })
  }

  ngAfterViewInit() {
    // this.http.get<any>('http://localhost:3000/getLogActibity').subscribe(result=>{
    //   this.LogArray = result;
    //   this.LogArray.reverse();
    //   console.log(this.LogArray)
    // })
  }

}
