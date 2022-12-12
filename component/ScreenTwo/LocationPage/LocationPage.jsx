import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LocationHeader, LocationMiddle } from './';
import PackageIcons from '../../ScreenOne/Package/PackageIcons';

const LocationPage = () => {
    return (
        <View style={styles.loc_page}>
            <LocationHeader />
            <LocationMiddle />
            <View style={styles.loca_bottom}>
                <PackageIcons />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loc_page: {
        width: '100vw',
        height: '100vh',
        backgroundColor: "#FFFFFF"
    },
    loca_bottom: {
        marginTop: "55%",
    }
})

export default LocationPage;
