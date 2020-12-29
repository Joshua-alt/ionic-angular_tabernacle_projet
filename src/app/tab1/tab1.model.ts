import { SafeResourceUrl } from '@angular/platform-browser';

export interface Video {
   videoId: string;
   videoUrl: SafeResourceUrl;
   channelId: string;
   channelUrl: string;
   channelTitle: string;
   title: string;
   publishedAt: Date;
   description: string;
   thumbnail: string;
 }