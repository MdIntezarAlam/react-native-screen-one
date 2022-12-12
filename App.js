import React from 'react';
import { View, StyleSheet } from 'react-native';
// import LocationPage from './component/ScreenTwo/LocationPage/LocationPage';
import Header from './component/ScreenOne/Header/Header';
import Home from './component/ScreenOne/Home/Home'
import Packages from './component/ScreenOne/Package/Packages';
// screen two******

const App = () => {
    return (
        // Screen One Components
        < View style={styles.app_container} >
            <Header />
            <Home />
            <Packages />
        </View >


        // // Screen One Components****************
        // <View style={styles.app_container}>
        //     <LocationPage />
        // </View>


    );
}

const styles = StyleSheet.create({
    app_container: {
        width: '100vw',
        height: '250vh',
        backgroundColor: "#fff",
    }
})

export default App;
