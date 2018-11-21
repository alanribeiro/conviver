import { Component, Input } from '@angular/core';

@Component({
  selector: 'co-comment-list',
  templateUrl: './co-comment-list.component.html',
  styleUrls: ['./co-comment-list.component.scss']
})
export class CoCommentListComponent {

  @Input() comments:Array<any>;

  constructor() { }

}
