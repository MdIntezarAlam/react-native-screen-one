import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { serviceOnemiddle } from '../../../utils/HomeData';

const ServiceOneMiddle = () => {
    return (
        <View style={styles.s_middle}>
            {serviceOnemiddle.map((data) => (
                <View style={styles.s_middle_flex}>
                    <View style={styles.s_Box_one}>
                        <Image source={data.img1} style={styles.imgs} />
                        <Text style={styles.cuts}>{data.title1} </Text>
                    </View>
                    <View style={styles.s_Box_two}>
                        <Image source={data.img2} style={styles.imgs} />
                        <Text style={styles.cutss}>{data.title2} </Text>
                    </View>
                </View>
            ))}
        </View>
    );
}
const styles = StyleSheet.create({
    s_middle: {
        width: '100vw',
        backgroundColor: "#fff",
        top: 120,
        display: 'inline-block'
    },
    s_middle_flex: {
        width: '80vw',
        height: '20vh',
        margin: 'auto',
        top: 20,
    },
    s_Box_one: {
        position: 'absolute',
        width: 120,
        height: 160,
        left: 3,
        top: 0,
        backgroundColor: '#175C4C',
        borderRadius: '20px',
    },

    imgs: {
        position: 'absolute',
        width: 102,
        height: 120,
        left: 15,
        top: 5,
    },

    cuts: {
        position: 'absolute',
        color: "#fff",
        fontSize: 12,
        top: 133,
        left: 12,
        padding: '5px',
        opacity: '0.9'
    },
    cutss: {
        position: 'absolute',
        color: "#000",
        fontSize: 12,
        top: 133,
        left: 12,
        padding: '5px',
        opacity: '0.9'
    },
    s_Box_two: {
        position: 'absolute',
        width: 120,
        height: 160,
        left: 179,
        top: 0,
        backgroundColor: '#fff',
        borderRadius: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset',
    }
})

export default ServiceOneMiddle;
