import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const img1 = require("../../assets/hd2.webp")
const img2 = require("../../assets/hd3.png")
const img3 = require("../../assets/hd1.webp")
const img4 = require("../../assets/sci1.png")
const img5 = require("../../assets/sci2.png")


const LocationHeader = () => {
    return (
        <View style={styles.location_Header}>
            <View style={styles.location_Header_box}>
                <Text style={styles.l_left}> 9:45</Text>
                <Text style={styles.l_middle}>
                    <Text style={styles.l__middle}></Text>
                </Text>
                <Text style={styles.l_right}>
                    <Image source={img1} style={{ width: '20px', height: '100%', margin: 2 }} />
                    <Image source={img2} style={{ width: '22px', height: '100%', margin: 2 }} />
                    <Image source={img3} style={{ width: '20px', height: '100%', margin: 2 }} />
                </Text>
                <View style={styles.bottomStyle}>
                    <Image source={img4} style={styles.b_imgStyle} color="#fff" />
                    <Text style={styles.b_textStyle}>Select Location</Text>
                    <Image source={img5} style={styles.b_imgStyle} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    location_Header: {
        position: 'absolute',
        width: '100vw',
        height: "115px",
        left: 0,
        right: 0,
        backgroundColor: '#175C4C',
        borderBottomLeftRadius: '20px',

    },
    location_Header_box: {
        flex: '1',
        flexDirection: 'row',
        padding: 20,
        justifyContent: "space-between"

    },
    l_left: {
        position: 'absolute',
        width: "28.43px",
        height: "11.09px",
        color: "#fff",
        left: 12.45,
        top: 5.17,
        fontSize: '14px',
    },
    l_middle: {
        position: 'absolute',
        width: "212px",
        height: "200px",
        display: 'inline-block',
        left: '100px',
        top: -112
    },
    l__middle: {
        position: 'absolute',
        width: '100%',
        height: "200px",
        opacity: '0.5px',
        border: '1px solid #000',
        backgroundColor: "green",
        borderRadius: '50%',
        top: '-100'
    },
    l_right: {
        width: '20%',
        height: ' 29.93px',
        position: 'absolute',
        color: "#fff",
        left: '320.17px',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    bottomStyle: {
        flex: 1,
        top: "45px",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '10px',
    },
    b_textStyle: {
        width: '179px',
        fontSize: '22px',
        lineHeight: '29px',
        letterSpacing: '0.02em',
        color: "#fff",
    }, b_imgStyle: {
        width: '16px',
        height: '17px',
        color: "#fff",
        fontSize: "22px"
    }
})

export default LocationHeader;
