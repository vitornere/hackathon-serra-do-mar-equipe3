import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';
import places from '../../constants/places';
import { useHistory } from 'react-router';
import logoImg from '../../assets/logo.jpeg';



const Home: React.FC = () => {
  const history = useHistory();
  const [placesFiltered, setPlacesFiltered] = useState(places);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="title">
          <IonRow>
          <IonCol size="1">
                <IonImg id="logo" src={logoImg} />
                </IonCol>
                <IonCol class="title">LogoAli</IonCol>
              </IonRow>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LogoAli</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonText id="title" color='success'>
          <h1>Conduzindo você a novas experiências!</h1>
        </IonText>

        <IonSearchbar onIonChange={e => {
          console.log(e.detail.value)
          if (e.detail.value) {
            const filter = places.filter(place => place.title.toLowerCase().includes(e.detail.value!.toLowerCase()));
            setPlacesFiltered(filter);
          } else {
            setPlacesFiltered(places)
          }
        }}></IonSearchbar>

        <IonList>
          {placesFiltered.map(place => (
            <IonItem className="places" key={place.title} onClick={() => history.push(`/page/place/${place.id}`)}>
              <IonCard>
                <IonImg src={place.img} />
                <IonCardHeader>
                  <IonCardSubtitle>Destino</IonCardSubtitle>
                  <IonCardTitle>{place.title.toUpperCase()}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  {place.description}
                </IonCardContent>
              </IonCard>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
