import { Component, OnInit, Input } from '@angular/core';
import {Tab1Service} from './shared/tab1.service';
import { Observable } from 'rxjs/Observable';
import {Video} from './tab1.model';
import { AlertController, NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { channelData } from '../tab3/model.interface';
import { ChanneIDService } from '../tab3/channe-id.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  ListeChannel: Observable<channelData[]>;
  hide: boolean = false;
  namer: string ='';
  nama: any;
  videos:Observable<Video[]>;

     constructor(private firestoreService:ChanneIDService,
                 private youTubeService: Tab1Service,
                 public navCtrl: NavController,
                 private alertCtrl: AlertController,
                 public sanitizer: DomSanitizer) { }
      ngOnInit(){
        this.firestoreService.getDefaultChannel().subscribe(data =>{
          this.nama = data;
          this.nama.map(user => {
            this.namer = user.IdChannel;
          })
          this.searchPlaylists(this.namer);
         console.log(this.namer);
       });
       this.ListeChannel = this.firestoreService.getChannelList();
      
       }
       show(eveat){
        if (!eveat){

        }else{
          this.searchPlaylists(eveat);
        }
    }
       onSearchChange(event: string){
        this.youTubeService.searchYoutube(event, this.namer)
        .subscribe((items: any) => {
         this.videos = items.map(item => {
           return {
             title: item.snippet.title,
             videoId: item.id.videoId,
             videoUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
             channelId: item.snippet.channelId,
             channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
             channelTitle: item.snippet.channelTitle,
             description: item.snippet.description,
             publishedAt: new Date(item.snippet.publishedAt),
             thumbnail: item.snippet.thumbnails.high.url
           };
         });
           // tslint:disable-next-line: align
           
         });
       }
       searchPlaylists(Id) {
        this.youTubeService.getPlaylistsForChannel(Id)
       .subscribe((items: any) => {
        this.videos = items.map(item => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          };
        });
          
         
        }, async err => {
          let alert = this.alertCtrl.create({
            message: 'problem de connexion internet',
            buttons: ['OK']
          });
          (await alert).present();
        })
      }
     
  }