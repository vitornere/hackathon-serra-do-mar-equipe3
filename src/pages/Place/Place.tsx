import { IonBackButton ,IonButton,IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import places, { Place } from '../../constants/places';
import { useParams } from 'react-router';
import { add } from 'ionicons/icons';


const PlacePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [place, setPlace] = useState<Place | undefined>(id ? places[Number(id)] : undefined);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>LogoAli</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LogoAli</IonTitle>
          </IonToolbar>
        </IonHeader>

        {place ? (
            <IonItem className="places" key={place.title}>
                <IonCard>
                <IonImg src={place.img} />
                <IonCardHeader>
                    <IonCardSubtitle>Destino</IonCardSubtitle>
                    <IonCardTitle>{place.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {place.description}
                </IonCardContent>
                </IonCard>
            </IonItem>
        ): (
            <IonText>Local não encontrado...</IonText>
        )}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="start" >
            <IonButton>Atrações</IonButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default PlacePage;
