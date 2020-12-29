import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChanneIDService } from 'src/app/tab3/channe-id.service';
import { channelData } from 'src/app/tab3/model.interface';

@Component({
  selector: 'app-list-photoinst',
  templateUrl: './list-photoinst.component.html',
  styleUrls: ['./list-photoinst.component.scss'],
})
export class ListPhotoinstComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
}
