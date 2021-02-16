import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  // ADD CHART OPTIONS. 
  pieChartOptions = {
    responsive: true
}

pieChartLabels =  ['In- Progress', 'EIM Approved', 'EIM Deined', 'Registered', 'Approved','Denied','Completed'];

// CHART COLOR.
pieChartColor:any = [
    {
        backgroundColor: [
        'rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(45, 102, 0, 0.9)',
        'rgba(25, 141, 171, 0.9)',
        'rgba(185, 2102, 14, 0.9)'
        ]
    }
]

pieChartData:any = [
    { 
        data: [10,25,44,57,54,41,2]
    }
];

ets=[
    {
      name:'Ray',
      request_id:23323,
      request_on:21/12/25,
      status_:'Completed'
    },
    {
      name:'Rahd',
      request_id:23323,
      request_on:21/12/25,
      status_:'Completed'
    },
    {
      name:'edd',
      request_id:23323,
      request_on:21/12/25,
      status_:'Completed'
    },
    {
      name:'dfs',
      request_id:23323,
      request_on:21/12/25,
      status_:'Completed'
    },
]
completed_request=0;
total_request=0;
pending_request=-0;

ngOnInit () {
    this.completed_request=12;
    this.total_request=1547;
    this.pending_request=19;
  var cbar_graphtx = new Chart('cbar_graphtx', {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

}
