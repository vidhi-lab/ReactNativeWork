import React from 'react';
import { View, Text } from 'react-native';
import { Api } from 'renative';
import Homescreen from '../Components/Homescreen';

const App = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Homescreen/>
    </View>
);

export default App;
