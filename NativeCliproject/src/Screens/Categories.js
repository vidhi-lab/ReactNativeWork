import React from "react";
import {View,Text, Button,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Categories=({navigation})=>
{
    return(
        <SafeAreaView>
        <View>
            <Text style={styles.txt}></Text>
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

export default Categories;