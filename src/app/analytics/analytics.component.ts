import { NgModule, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})

export class AnalyticsComponent implements OnInit {
  
  public data;

  constructor(private http:Http) {
    this.http.get('/assets/data/activity-data.json')
    .subscribe(res => this.data = res.json());
  }

  public chartOneOpts:any = {
    options: {
      responsive: true,
      maintainAspectRatio: true,
      elements: {
        line: {
          tension: 0, // disables bezier curves
        }
      }
    },
    type: 'line',
    legend: true
  };

  public chartTwoOpts:any = {
    options: {
      responsive: true,
      maintainAspectRatio: true
    },
    type: 'bar',
    legend: true
  };

  public chartThreeOpts:any = {
    options: {
      responsive: true,
      maintainAspectRatio: true
    },
    type: 'doughnut',
    legend: true
  };

  public chartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', fill: false},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', fill: false},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C', fill: false}
  ];

  public chartLabels:Array<any> = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July'
  ];

  public chartLabelsTwo:Array<any> = [
    'January', 'February', 'March', 'April'
  ];


  public randomize():void {
    let _chartData:Array<any> = new Array(this.chartData.length);
    for (let i = 0; i < this.chartData.length; i++) {
      _chartData[i] = {data: new Array(this.chartData[i].data.length), label: this.chartData[i].label};
      for (let j = 0; j < this.chartData[i].data.length; j++) {
        _chartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.chartData = _chartData;
  }

  ngOnInit() {
    setInterval (() => {
      this.randomize();
    }, 5000)
  }

}

