import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { location_middle_data } from '../../utils/HomeData';



const LocationMiddle = () => {
    return (
        <View>
            {location_middle_data.map((data) => (
                <View style={styles.l_middle}>
                    <View style={styles.l_miidle_box}>
                        <Image source={data.rightImg} style={styles.l_m_img} />
                        <Text style={styles.l_m_textStyle}>{data.fmText}</Text>
                        <Text style={styles.l_m__textStyle}>{data.fmlongText}</Text>
                        <Image source={data.crosImg} style={styles.l_m_r_img} />
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    l_middle: {
        width: '100vw',
        height: "200px",
        left: 0,
        top: 115,
        backgroundColor: "#fff",
        display: 'inline-block',
        backgroundColor: "#fff"
    },
    l_miidle_box: {
        width: '95vw',
        height: '180px',
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
        top: 24,
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
        top: 28,
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
        left: 70,
        top: 57,
        letterSpacing: "0.02em",
        lineHeight: "28px",
    },
    l_m_r_img: {
        width: 32,
        height: 25,
        left: 321,
        top: 28,
        borderRadius: '5px',
        fontWeight: '300'

    }
})

export default LocationMiddle;
