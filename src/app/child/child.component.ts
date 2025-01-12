import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  @Output() messageEvent1 = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  public sendMessage() {
    this.messageEvent.emit('Hello from child via @output')
  }

  public emit1(){
    this.messageEvent1.emit('message 1')
  }
}

