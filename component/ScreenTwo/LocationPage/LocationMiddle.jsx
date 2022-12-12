import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LocationMiddle = () => {
    return (
        <View style={styles.l_middle}>
            <View style={styles.l_miidle_box}>
                <Image source={require("../../../assets/sci3.jpg")} style={styles.l_m_img} />
                <Text style={styles.l_m_textStyle}>FM 529</Text>
                <Text style={styles.l_m__textStyle}>1714 FM 529 Rd,Houston Tx 77095</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    l_middle: {
        width: '100vw',
        height: "400px",
        left: 0,
        top: 115,
        backgroundColor: "#fff",
        display: 'inline-block'
    },
    l_miidle_box: {
        // position:'absolute',
        width: '95vw',
        height: '190px',
        left: '0',
        top: '11px',
        backgroundColor: "#fff",
        margin: 'auto',
        borderRadius: "10px",
        border: '1px solid #175C4C',
        flexDirection: 'row',
    },
    l_m_img: {
        position: 'absolute',
        width: 34,
        height: 34,
        left: 10,
        top: 20,
        fontSize: '28px',
    },
    l_m_textStyle: {
        position: 'absolute',
        width: 140,
        height: 24,
        fontSize: '22px',
        color: "#000",
        fontWeight: '800',
        left: 70,
        top: 20,
        letterSpacing: "0.02em",
        lineHeight: "24px",
    },
    l_m__textStyle: {
        position: 'absolute',
        width: 209,
        height: 36,
        fontSize: 16,
        color: "#102C56",
        fontWeight: '400',
        left: 72,
        top: 55,
        letterSpacing: "0.02em",
        lineHeight: "18px",
        padding:'10px'
    }
})

export default LocationMiddle;
