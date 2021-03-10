import {IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet, IonButton, IonMenuButton, IonButtons } from '@ionic/react';


const Menue = () =>{

    return <IonMenu side="start" menuId="first" contentId="foo" id="first">
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
}
export default Menue;