import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { packageContact } from '../../../utils/HomeData'

const PackageContact = ({ heading }) => {
    return (
        <View>
            <Text style={styles.contactHeading}>{heading}</Text>
            <View style={styles.c_Box}>
                {packageContact.map((data) => (
                    <View style={styles.c_flex}>
                        <View style={styles.flex_one}>
                            <Image source={data.icon} style={styles.c_img} />
                            <Text style={styles.conNames}>{data.conName}</Text>
                        </View>
                        <View style={styles.flex_two}>
                            <Text>{data.conNum}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contactHeading: {
        padding: '15px',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: "24px",
        letterSpacing: '2%',
        color: "#102C56",
    },
    c_Box: {
        width: '100vw',
        borderBottom: '1px solid #979797',
        backgroundColor: "#FBFCFE",
        display: 'inline-block'
    },
    c_flex: {
        height: '50px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#979797d',
        borderBottomWidth: '0.5px',
        padding: '10px'
    },
    flex_one: {
        height: '30px',
        margin: '4px',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    c_img: {
        width: '23px',
        height: '23px',
        borderRadius: '5px',
        color: "#175C4C",
        margin: '10px',
    },
    conNames: {
        color: "#175C4C",
        fontSize: '14px',
        lineHeight: "24px",
        letterSpacing: "2%",
        fontWeight: '500'
    },
    flex_two: {
        height: '30px',
        margin: '4px',
    }
})

export default PackageContact;
