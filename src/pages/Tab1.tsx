<<<<<<< HEAD
import React from 'react';
import {IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet, IonButton, IonMenuButton } from '@ionic/react';

=======
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
>>>>>>> test2
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton menu="first"></IonMenuButton>
          </IonButtons>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
<<<<<<< HEAD

      <IonMenu side="start" menuId="first" contentId="foo" id="first">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

      <IonContent fullscreen id="foo">

      
=======
      <IonContent fullscreen id="foo">
>>>>>>> test2
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonMenuButton menu="first" id="firstmenue"></IonMenuButton>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
