import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LocationHeader, LocationMiddle } from './';
const LocationPage = () => {
    return (
        <View style={styles.loc_page}>
            <LocationHeader />
            <LocationMiddle />
        </View>
    );
}

const styles = StyleSheet.create({})

export default LocationPage;
