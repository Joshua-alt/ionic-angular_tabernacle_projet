
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
 import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service{
    apiKey = 'AIzaSyB0yHCsuqWwP-jvCk0JtVKHuQlR5ULP3lc';
    constructor(private Http: HttpClient) { }
   
    getPlaylistsForChannel(channel) {
      return this.Http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
      .map((response: any) => response.items)
      
    }
   
    searchYoutube(query, channel) {
      
      return this.Http.get('https://www.googleapis.com/youtube/v3/search?q=' + query + '&key=' + this.apiKey + '&channelId=' + channel + '&part=snippet&type=video&maxResults=10')
      .map((res: any) => {
        return res.items;
      })
    }
}
