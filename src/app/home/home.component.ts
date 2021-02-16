import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';

export interface ITPopularity {
  rank: number;
  language: string;
  ide: string;
  db: string;
}

const ELEMENT_DATA: ITPopularity[] = [
  {rank: 1, language: 'Python', ide: 'Visual Studio', db: 'Oracle'},
  {rank: 2, language: 'Java', ide: 'Eclipse', db: 'MySQL'},
  {rank: 3, language: 'JavaScript', ide: 'Android Studio', db: 'SQL Server'},
  {rank: 4, language: 'C#', ide: 'Visual Studio Code', db: 'Microsoft Access'},
  {rank: 5, language: 'C/C++', ide: 'pyCharm', db: 'PostgreSQL'},
  {rank: 6, language: 'PHP', ide: 'IntelliJ', db: 'MongoDB'},
  {rank: 7, language: 'R', ide: 'NetBeans', db: 'Firebase'},
  {rank: 8, language: 'Objective-C', ide: 'Xcode', db: 'Splunk'},
  {rank: 9, language: 'Swift', ide: 'Atom', db: 'Elasticsearch'},
  {rank: 10, language: 'NTypeScripteon', ide: 'Sublime Text', db: 'Redis'},
];


@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  displayedColumns: string[] = ['rank', 'linguagem', 'ide', 'db'];
  dataSource = ELEMENT_DATA;
  
  product:any;
  constructor(private router : Router) { }

  ngOnInit(): void {
  
  }

  enviar(message) {
    this.router.navigateByUrl('/mensagem', { state: message });
  }


}
