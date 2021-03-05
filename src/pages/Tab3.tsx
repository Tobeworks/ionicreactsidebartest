import React from 'react';
import {IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet, IonButton, IonMenuButton } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonMenu side="start" menuId="third" contentId="foo3" id="third">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu3 Item</IonItem>
          <IonItem>Menu3 Item</IonItem>
          <IonItem>Menu3 Item</IonItem>
          <IonItem>Menu3 Item</IonItem>
          <IonItem>Menu3 Item</IonItem>

        </IonList>
      </IonContent>
    </IonMenu>


      <IonContent fullscreen id="foo3">

      

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonMenuButton menu="third" id="thirdmenue"></IonMenuButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
