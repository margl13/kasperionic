import {Component, OnInit} from '@angular/core';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  comments: any[];
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(value => this.comments = value);
  }

}
