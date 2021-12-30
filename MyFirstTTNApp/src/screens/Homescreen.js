import React from "react";
import {View,Text, Button,StyleSheet, TouchableOpacity,Image, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Homescreen=()=>
{
    return(
        <ScrollView  showsVerticalScrollIndicator={false}>
        <SafeAreaView>
        <View style={StyleSheet.container}>

        {/* <View style={styles.container}>
        <Text style={styles.headtxt}>MEN CLOTHING</Text>
        </View> */}

        {/* <View style={styles.line}/> */}

        <View style={styles.container2}>
        <Text style={styles.txt}>195 items</Text>

        <TouchableOpacity style={styles.touch1}>
            <Image source={require('./images/icon1.png')}/>
                <Text>SORT</Text>
        </TouchableOpacity>


        <View style={styles.line3}/>

        <TouchableOpacity style={styles.touch2}>
        <Image source={require('./images/icon3.png')}/>
                <Text>FILTER</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.line2}/>

        <View style={styles.container3}>
        <TouchableOpacity style={styles.touch3}>
                <Text style={styles.shtxt}>Polo Shirts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch3}>
                <Text style={styles.shtxt}>Shirts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch3}>
                <Text style={styles.shtxt}>Shorts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch3}>
                <Text style={styles.shtxt}>Jeans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch3}>
                <Text style={styles.shtxt}>Jeans</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.container4}>
            <View style={styles.imgcontainer}>
            <Image style={styles.img1}
            source={require('./images/img.jpg')}
            />
            <View style={styles.newlogo}>
            <Text>NEW</Text>
            </View>

            <View style={styles.logo}>
            <Image 
            source={require('./images/imgaelogo.png')}/>
            </View>
            <Text style={styles.imgtxt}>Tommy Hilfiger</Text>
            <Text style={styles.imgtxt1}>Mens's Polo Shirts</Text>
            <Text style={styles.imgtxt2}>Limelight Combo</Text>
            <Text style={styles.imgtxt3}>USD 23</Text>
        </View>

        <View style={styles.imgcontainer2}>
            <Image style={styles.img1}
            source={require('./images/img2.jpg')}
            />
            <View style={styles.newlogo}>
            <Text>NEW</Text>
            </View>

            <View style={styles.logo}>
            <Image 
            source={require('./images/imgaelogo.png')}/>
            </View>
            <View style={styles.newlogo}>
            <Text>NEW</Text>
            </View>

            <View style={styles.logo}>
            <Image 
            source={require('./images/imgaelogo.png')}/>
            </View>
            <Text style={styles.imgtxt4}>Tommy Hilfiger</Text>
            <Text style={styles.imgtxt5}>Men's Morrison Shirts</Text>
            <Text style={styles.imgtxt6}>Black Dotted</Text>
            <Text style={styles.imgtxt7}>USD 23</Text>
            </View>
        </View>

        <View style={styles.container5}>
            <View style={styles.imgcontainer3}>
            <Image style={styles.img1}
            source={require('./images/img4.jpg')}/>
            <View style={styles.newlogo}>
            <Text>NEW</Text>
            </View>

            <View style={styles.logo}>
            <Image 
            source={require('./images/imgaelogo.png')}/>
            </View>
            <Text style={styles.imgtxt}>Tommy Hilfiger</Text>
            <Text style={styles.imgtxt1}>Men's Morrison Stripe Polo</Text>
            <Text style={styles.imgtxt2}>Limelight Combo</Text>
            <Text style={styles.imgtxt3}>USD 23</Text>
            </View>

            <View style={styles.imgcontainer4}>
            <Image style={styles.img1}
            source={require('./images/img3.jpg')}/>
            <View style={styles.newlogo}>
            <Text>NEW</Text>
            </View>

            <View style={styles.logo}>
            <Image 
            source={require('./images/imgaelogo.png')}/>
            </View>
            <Text style={styles.imgtxt4}>Tommy Hilfiger</Text>
            <Text style={styles.imgtxt5}>Men's Morrison Shirts</Text>
            <Text style={styles.imgtxt6}>Black Dotted</Text>
            <Text style={styles.imgtxt7}>USD 23</Text>
            </View>
        </View>

        </View>
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    line:
    {
        borderBottomWidth:0.5,
        borderBottomColor:'#d3d3d3'
    },
    container2:
    {
        flexDirection:'row',
    },
    txt:
    {
        paddingLeft:10
    },
    touch1:
    {
        paddingLeft:150,
        flexDirection:'row',
        alignItems:'center'
    },
    touch2:
    {
        flexDirection:'row',
        alignItems:'center'
    },
    
    line2:
    {
        borderBottomWidth:0.5,
        borderBottomColor:'#d3d3d3',
        paddingTop:10
    },
    container3:
    {
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        
        
        
    },
    touch3:
    {
        borderWidth:1,
        width:80,
        height:30,
        borderRadius:10,
        borderColor:'#d3d3d3',
        backgroundColor:'#d3d3d3',
        alignItems:"center",
        justifyContent:'center',
        marginRight:15
    },
    shtxt:
    {
        color:'#000'
    },
    container4:
    {
        paddingTop:10,
        flexDirection:'row',
        
    },
    img1:
    {
        width:180,
        height:250,
    },
    img2:
    {
        width:180,
        height:250,
    },
    imgcontainer:
    {
        paddingLeft:10
    },
    imgtxt:
    {
        color:'#000',
        paddingTop:10

    },
    imgtxt1:
    {
        color:'#888',
        paddingTop:3
    },
    imgtxt2:{
        color:'#888',
        paddingTop:3
    },
    imgtxt3:
    {
        paddingTop:3
    },
    imgcontainer2:
    {
        paddingRight:10,
        paddingLeft:10
    },
    imgtxt4:
    {
        color:'#000',
        paddingTop:10

    },
    imgtxt5:
    {
        color:'#888',
        paddingTop:3
    },
    imgtxt6:{
        color:'#888',
        paddingTop:3
    },
    imgtxt7:
    {
        paddingTop:3
    },
    container5:
    {
        flexDirection:'row',
        paddingTop:15,
    },
    imgcontainer3:
    {
        paddingLeft:10
    },
    imgcontainer4:
    {
        paddingLeft:8,
    },
    line3:
    {
        width:1,
        height:20,
        backgroundColor:'#000',
        marginHorizontal:10
    },
    newlogo:
    {
        position:'absolute',
        backgroundColor:'#90ee90',
        marginLeft:10,
        padding:5

    },
    logo:
    {
        position:'absolute',
        marginLeft:160
    }
    
});

export default Homescreen;