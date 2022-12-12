import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import HeaderTop from '../Header/HeaderTop'
import MiddleHeader from '../Header/MiddleHeader'


// const hdimg = require("../../images/hd.png")
const Header = () => {
    return (
        <View style={styles.h_container}>
            <HeaderTop />
            <View style={styles.top_Heading}>
                <Text style={styles.textStyle}>Hii Jackson</Text>
                <View style={styles.textFlex}>
                    <Text style={styles.text_Styles}>Welcome  to the Salonnz!!!</Text>
                    <Image source={require("../../../assets/p_2.jpg")} style={styles.headerIcon} />
                </View>
            </View>
            <MiddleHeader />
            <View style={styles.dot}>
                <Text style={styles.dot_1}></Text>
                <Text style={styles.dot_1}></Text>
                <Text style={styles.dot_1}></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    h_container: {
        width: '100vw',
        minHeight: '50vh',
        backgroundColor: "#175C4C",
        borderBottomLeftRadius: '10%',
    },
    top_Heading: {
        padding: '20px',
        margin: '10px',
    },
    textStyle: {
        fontSize: '16px',
        color: "#fff",
        lineHeight: '21px',
        letterSpacing: '1%',
    },
    textFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text_Styles: {
        fontSize: '20px',
        color: "#fff",
        lineHeight: '26px',
        letterSpacing: '1%',
        marginTop: '10px',
    },
    headerIcon: {
        width: '20px',
        height: '20px',
        color: '#fff',
        borderRadius: '50%',
    },
    dot: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 'auto'
    },
    dot_1: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: "#fff",
        margin: '2px',
    }
})

export default Header;


<Text>Icon</Text>