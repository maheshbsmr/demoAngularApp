import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-admission-dashboard',
  templateUrl: './admission-dashboard.component.html',
  styleUrls: ['./admission-dashboard.component.css']
})
export class AdmissionDashboardComponent implements OnInit {
 card:any[]=[];
  constructor(private studentService :StudentService) { }
  studentList:any[]=[];
  multiAxisData: any;
  multiAxisOptions: any;
  ece:number = 10;
  ngOnInit(): void {
    debugger;
    this.getAllstudents();
    this.card=[
      {
      'Id':'1','count':'10'
      },
      {
        'Id':'2','count':this.studentList.length.toString()
        },
        {
          'Id':'3','count':this.studentList.length.toString()
          },
          {
            'Id':'4','count':this.studentList.length.toString()
            },
  ]

  this.multiAxisData = {
    labels: ['ECE', 'EEE', 'MECH', 'CIVIL', 'IT', 'CSE', 'CHEMICAL'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: [
            '#EC407A',
            '#AB47BC',
            '#42A5F5',
            '#7E57C2',
            '#66BB6A',
            '#FFCA28',
            '#26A69A'
        ],
        yAxisID: 'y',
        data: [this.ece, 59, 80, 81, 56, 55, 10]
    }, 
    // {
    //     label: 'Dataset 2',
    //     backgroundColor: '#78909C',
    //     yAxisID: 'y1',
    //     data: [28, 48, 40, 19, 86, 27, 90]
    // }
  ]
};

this.multiAxisOptions = {
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      },
      tooltips: {
          mode: 'index',
          intersect: true
      }
  },
  scales: {
      x: {
          ticks: {
              color: '#495057'
          },
          grid: {
              color: '#ebedef'
          }
      },
      y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
              min: 0,
              max: 100,
              color: '#495057'
          },
          grid: {
              color: '#ebedef'
          }
      },
      y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
              drawOnChartArea: false,
              color: '#ebedef'
          },
          ticks: {
              min: 0,
              max: 100,
              color: '#495057'
          }
      }
  }
};

  }
  getAllstudents(){
    this.studentService.getAllStudent().subscribe(item=>{
      this.studentList = item;
      console.log(this.studentList);
    })
   }

   
}
