import React from 'react';
import { View, StyleSheet } from 'react-native';
// Screen one
// import Header from './component/ScreenOne/Header/Header';
// import Home from './component/ScreenOne/Home/Home'
// import Packages from './component/ScreenOne/Package/Packages';

// screen two******
// import LocationPage from './component/ScreenTwo/LocationPage'
import ServiceOne from './component/ScreenThree/SelecetServiceOne/ServiceOne';

const App = () => {
    return (
        // Screen One start Components*****************
        // <View style={styles.app_container} >
        //     <Header />
        //     <Home />
        //     <Packages />
        // </View >
        // Screen One Components end *****************


        // Screen One Components****************
        // <View style={styles.app_container}>
        //     <LocationPage />
        // </View>


        // Screen three*********************
        <View style={styles.app_container}>
            <ServiceOne />
        </View>
    );
}

const styles = StyleSheet.create({
    app_container: {
        width: '100vw',
        backgroundColor: "#fff",
    }
})

export default App;
