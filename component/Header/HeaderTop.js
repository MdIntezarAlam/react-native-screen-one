import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HeaderTop = () => {
    return (
        <View style={styles.top}>
            <Text style={styles.text1Style}>9:41</Text>
            <Text style={styles.text2Style}>2</Text>
            <Text style={styles.textThreeStyle}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
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
        width: '250px',
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
        right: ' 24px',
        backgroundColor: ' #DADADA',
        top: '28.33px',
        left: '325px',
        color: "#fff",
        fontSize: "15px",
        backgroundColor: "#909090",
    }
})

export default HeaderTop;
