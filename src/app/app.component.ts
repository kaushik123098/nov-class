import { AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit, DoCheck, OnDestroy {
  title = 'nov-class';
  parentMessage = 'Hello from parent';
  name: string = '';
  a = 2;

  items: string[] = ['Item 1', 'Item 2', 'Item 2'];

  example = [
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
    { name: 'richard', roll: 123, add: 'bbsr' },
  ]
  constructor() {

  }

  ngOnInit(): void {
    console.log('oninit fire');

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes');

  }

  ngAfterViewInit(): void {
    console.log('After view init');

  }

  ngDoCheck(): void {
    console.log('Do check');

  }

  ngOnDestroy(): void {
    console.log('Dest comp');

  }

  getData() {
    console.log(this.name);
    console.log('hello');
    for (let i of this.example) {
      console.log(i);

    }

  }

  public receveMessage(e: any) {
    console.log({ Event_is: e });

  }

  public receve1(e: any) {
    console.log(e);

  }
}

