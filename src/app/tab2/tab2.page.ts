import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: Observable<any>;

  newTodo: string = '';
  itemsRef: AngularFirestoreCollection;

  selectedFile: any;
  loading: HTMLIonLoadingElement;
  constructor(
    private db: AngularFirestore, 
    private fireStorage: AngularFireStorage,
    private storage: AngularFireStorage, 
    private loadingController: LoadingController
) {
    this.itemsRef = db.collection('items')
    this.items = this.itemsRef.valueChanges();
    
  }

  chooseFile (event) {
    this.selectedFile = event.target.files;
  }
  addTodo(){
    this.itemsRef.add({
      title: this.newTodo
    })
    .then(async resp => {
      
      const imageUrl = await this.uploadFile(resp.id, this.selectedFile)
      
      this.itemsRef.doc(resp.id).update({
        id: resp.id,
        imageUrl: imageUrl || null
      })
      
    }).catch(error => {
      console.log(error);
    })
  }

  async uploadFile(id, file){
    if(file && file.length) {
      try {
        await this.presentLoading();
        const task = await this.storage.ref('images').child(id).put(file[0])
        this.loading.dismiss();
        return this.storage.ref(`images/${id}`).getDownloadURL().toPromise();
      } catch (error) {
        console.log(error);
      }
    }
  }
  remove(item){
    if(item.imageUrl) {
      this.storage.ref(`images/${item.id}`).delete()
    }
    this.itemsRef.doc(item.id).delete()
  }
  

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    return this.loading.present();
  }



}
