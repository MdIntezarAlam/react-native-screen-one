import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ServiceOneHeader, ServiceOneMiddle } from '../SelecetServiceOne/index';
import PackageIcons from '../../ScreenOne/Package/PackageIcons';

const ServiceOne = () => {
    return (
        <View style={styles.loc_page}>
            <ServiceOneHeader />
            <ServiceOneMiddle />
            <View style={styles.loca_bottom}>
                <PackageIcons />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loc_page: {
        width: '100vw',
        backgroundColor: "#fff"
    },
    loca_bottom: {
        marginTop: "95%",
        paddingBottom: '5px',
    }
})

export default ServiceOne;
