import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

import {LOCATION_DELTA} from '../../helper/constants';
import {requestLocationPermission} from '../../helper/global';
import {Header, UserLocationDetails} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';

const UserLocationScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  const {goBack} = useNavigation();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    const hasLocationPermission = await requestLocationPermission();

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => setCurrentLocation({...position.coords, ...LOCATION_DELTA}),
        () => null,
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  return (
    <View style={style.mainContainer}>
      <Header title={strings.map} hasBackButton={true} onBackPress={goBack} />
      <MapView initialRegion={currentLocation} style={style.map}>
        {currentLocation ? <Marker coordinate={currentLocation} /> : null}
      </MapView>
      <UserLocationDetails data={currentLocation || {}} />
    </View>
  );
};

export default UserLocationScreen;
