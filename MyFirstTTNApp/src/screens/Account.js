import React from "react";
import {View,Text, Button,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Account=({navigation})=>
{
    return(
        <SafeAreaView>
        <View>
            <Text style={styles.txt}>Hey this is Account screen</Text>
            
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt:
    {
        fontSize:30
    }
});

export default Account;