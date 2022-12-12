import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const HeaderTop = () => {
    return (
        <View style={styles.top}>
            <Text style={styles.text1Style}>9:41</Text>
            <Text style={styles.text2Style}></Text>
            <Text style={styles.textThreeStyle}>
            <Image source={require("../../../assets/hd3.png")} style={styles.textIcons} />
            <Image source={require("../../../assets/hd2.webp")} style={styles.textIcons} />
                <Image source={require("../../../assets/hd1.webp")} style={styles.textIcons} />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        width: '100vw',
        height: '20px',
        padding: '20px',
        flex: 1,
        flexDirection: 'row',
    },
    text1Style: {
        position: 'absolute',
        width: '28.43px',
        color: "#fff",
        fontSize: '15px',
    },

    text2Style: {
        position: 'absolute',
        width: '245px',
        height: '233.64px',
        left: ' 70px',
        top: '-122.08px',
        opacity: '0.5',
        border: '1px solid #C0E1BF',
        backgroundColor: "green",
        borderRadius: '50%'
    },
    textThreeStyle: {
        position: 'absolute',
        width: '80px',
        height: '8.33px',
        right: ' 10px',
        top: '20.33px',
        left: '314px',
        color: "#fff",
        fontSize: "15px",
        backgroundColor: "#909090",
    },
    textIcons: {
        width: '24px',
        height: '20px',
        marginLeft:'2px',
        color:"#fff",
        borderRadius:'10%'
    }

})

export default HeaderTop;
