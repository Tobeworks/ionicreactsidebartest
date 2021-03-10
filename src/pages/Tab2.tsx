<<<<<<< HEAD
import React from 'react';
import {IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet, IonButton, IonMenuButton } from '@ionic/react'
=======
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
>>>>>>> test2
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton menu="second"></IonMenuButton>
          </IonButtons>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
<<<<<<< HEAD

      <IonMenu side="start" menuId="second" contentId="foo2" id="second">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu2 Item</IonItem>
          <IonItem>Menu2 Item</IonItem>
          <IonItem>Menu2 Item</IonItem>
          <IonItem>Menu2 Item</IonItem>
          <IonItem>Menu2 Item</IonItem>

        </IonList>
      </IonContent>
    </IonMenu>


      <IonContent fullscreen id="foo2">

      

=======
      <IonContent fullscreen id="foo2">
>>>>>>> test2
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonMenuButton menu="second" id="secondmenue"></IonMenuButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
