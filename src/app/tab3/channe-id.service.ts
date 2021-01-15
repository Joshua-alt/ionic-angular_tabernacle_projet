import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { channelData } from './model.interface';

@Injectable({
  providedIn: 'root'
})
export class ChanneIDService {

  // productsCollectionRef: AngularFirestore<Song>;

  constructor(public firestore: AngularFirestore) {
    // this.productsCollectionRef = this.afs.collection('songList'); 
  }

  // Create
  createChannel(
    NomChannel: string,
    IdChannel: string,
    channelDescription: string,
  ): Promise<void> {
    const id = this.firestore.createId();
  
    return this.firestore.doc(`channelLIST/${id}`).set({
      id,
      NomChannel,
      IdChannel,
      channelDescription,
    });
  }
  getChannelList(): Observable<channelData[]> {
    return this.firestore.collection<channelData>(`channelLIST`).valueChanges();
  }
  getDefaultChannel() {
    return this.firestore.collection(`channelLIST`, ref => ref.where('NomChannel', '==', 'Pasteur').limit(1)).valueChanges();
  }
  getChannelDetail(channelId: string): Observable<channelData> {
    return this.firestore.collection('channelLIST').doc<channelData>(channelId).valueChanges();
  }
  deleteChannel(channelId: string){
    return this.firestore.collection('channelLIST').doc(channelId).delete();
  }

  // updateChannel(channelId: string) {
  //   // tslint:disable-next-line: max-line-length
  //   return this.firestore.collection('channelLIST').doc(channelId).update({  });
  //  }

}
