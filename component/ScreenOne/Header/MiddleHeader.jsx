import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, } from 'react-native';
import { middle_header_data } from '../../../utils/HomeData';


const { width } = Dimensions.get("window")
const height = width * 0.5;

const MiddleHeader = () => {
    return (
        <View style={{ width, height, }}>
            <ScrollView pagingEnabled horizontal style={{ width, height }}>
                {middle_header_data.map((data) => (
                    <View style={styles.header__Box}>
                        <Text style={styles.boxText_1}>{data.discount}</Text>
                        <View style={styles.textFlex}>
                            <View>
                                <Text style={styles.text_Styles}>{data.beauity}<br />{data.beauityBr} </Text>
                                <Text style={styles.offerStyle}>{data.getOff}</Text>
                            </View>
                            <Text style={styles.imgs}>
                                <Image source={data.img} style={styles.imgss} />
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header__Box: {
        width: width,
        height: height,
        backgroundColor: "#fff",
        // margin: "auto",
        borderRadius: '10px',
        margin: '10px',
    },
    boxText_1: {
        color: "orange",
        padding: '10px',
        marginTop: '2px',
        fontSize: "17px",
        fontWeight: '600',
    },
    textFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px',
        position: 'relative',
    },
    text_Styles: {
        color: "#2C685A",
        fontSize: '17px',
        fontWeight: '700',
        lineHeight: '25px',
    },
    imgs: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        backgroundColor: "orange",
        position: 'relative',
        padding: '10px',
    },
    imgss: {
        width: '120px',
        height: '130px',
        marginTop: '20px',
        top: 20,
        left: 1,
        borderBottomLeftRadius: '4px',
        position: "absolute",
        resizeMode: "cover",
    },
    offerStyle: {
        width: '70%',
        marginTop: '20px',
        lineHeight: '12px',
        color: "orange",
        fontWeight: '600',
        border: '1px solid #808080',
        padding: '6px',
        borderRadius: '10px',
    }
})

export default MiddleHeader;
