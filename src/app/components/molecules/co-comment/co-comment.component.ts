import { Component, OnInit, Input } from '@angular/core';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'co-comment',
  templateUrl: './co-comment.component.html',
  styleUrls: ['./co-comment.component.scss']
})
export class CoCommentComponent {

  @Input() comment:any;

  constructor() { }

}
