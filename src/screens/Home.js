import React, { useEffect, useRef } from 'react';
import {
    View, 
    Text,
    Image,
    ImageBackground,
    Animated,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Icon2 from '@expo/vector-icons/Fontisto';
import Icon3 from "@expo/vector-icons/Entypo";

import Colors from '../constants/Colors';
//import { PieChart } from "react-native-svg-charts";


const data = [
	{
		key: 1,
		amount: 80,
		svg: { fill: Colors.colors.light },
	},
	{
		key: 2,
		amount: 20,
		svg: { fill: Colors.colors.yellow },
	},
];

const Home = (props) => {

    const pan = useRef(new Animated.ValueXY()).current;
	useEffect(() => {
		Animated.timing(pan, {
			toValue: { x: 800, y: 0 },
			delay: 1000,
			useNativeDriver: false,
		}).start();
	});

    return(
        <View style={styles.page}>
            <ImageBackground
            source={require('../images/bitmap.png')}
            style={styles.bi}
            >
                <View style={styles.headerContainer}>

                    <View style={{flex:5}}>
                        <Icon2
                        name='minus-a'
                        color={Colors.colors.light}
                        size={25}
                        />
                         <Icon
                        name='ios-remove'
                        color={Colors.colors.light}
                        size={32}
                        style={styles.ico}
                        />
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <Image
                        source={require('../images/2.jpg')}
                        style={styles.av}
                        />
                        <View style={styles.dot}></View>
                    </View>

                </View>

                <View style={styles.hdText}>
                <Text style={styles.textFile}>File</Text>
                <Icon3 
                name='dots-two-horizontal'
                color='#FFF'
                size={24}
                />
                </View>

                <Text style={styles.textManager}>Manager</Text>

                <View style={styles.topText}>
                    <Text style={styles.le}>Let's clean and</Text>
                    <Text style={styles.ri}>manage your file's</Text>
                </View>

                <View style={styles.sideTab}>
                    <View style={{marginLeft:-20}}>
                        <Text style={styles.tab1}>Exrternal Storage</Text>
                        <Text style={styles.tab2}>Internal Storage</Text>
                    </View>

                    <Animated.View style={[pan.getLayout()]}>
                        <View style={styles.card}>
                            <View style={styles.top}>
                                <Text style={styles.textTop}>Your Storage</Text>
                            
                            <Icon3
                            name='sound-mix'
                            color='#FFF'
                            style={{marginLeft:50}}
                            size={16}
                            />
                        </View>

                        <View>

                            <View style={styles.center}>
                                <View style={styles.col}>
                                    <Text style={styles.space}>128</Text>
                                    <Text style={styles.gb}>GB</Text>
                                </View>
                                <Text style={styles.per}>70% Used</Text>
                            </View>
                            
                            {/* <PieChart
									style={styles.pie}
									valueAccessor={({ item }) => item.amount}
									data={data}
									spacing={0}
									innerRadius={"60%"}
									outerRadius={"90%"}
								/> */}

                            <View style={styles.labelContainer}>

                                <View style={{
                                    ...styles.circle,
                                    backgroundColor:Colors.colors.light
                                }}></View>
                                <Text style={styles.textUsed}>Used</Text>

                                <View style={{
                                    ...styles.circle,
                                    backgroundColor:Colors.colors.light
                                }}></View>
                                <Text style={styles.textFree}>Free</Text>

                            </View>

                        </View>
                        
                        <TouchableOpacity
                        onPress={()=>props.navigation.navigate('Detail')}
                        style={styles.btn}
                        >
                            <Text style={styles.textStorage}>Storage</Text>
                        </TouchableOpacity>

                        <View style={styles.shadow}></View>
                        </View>
                    </Animated.View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    page:{
        backgroundColor:Colors.colors.light,
        flex:1
    },
    bi:{
        width:393,
        height:680
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:40,
        marginHorizontal:20
    },
    shadow:{
        backgroundColor:Colors.colors.red,
        height:320,
        width:30,
        marginLeft:195,
        opacity:0.5,
        marginTop:20,
        borderRadius:20,
        position:'absolute'
    },
    textStorage:{
        color:Colors.colors.light,
        fontSize:10,
    },
    btn:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:150,
        backgroundColor:Colors.colors.blue,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:25,
        borderWidth:3,
        borderColor: "#f04946",
    },
    textFree:{
        color:Colors.colors.yellow,
    },
    circle:{
        width:10,
        height:10,
        borderRadius:10,
        marginHorizontal:10
    },
    textUsed:{
        color:Colors.colors.light,
    },
    labelContainer:{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        marginTop:20
    },
    av:{
        width:40,
        height:40,
        borderRadius:10
    },
    dot:{
        backgroundColor:Colors.colors.yellow,
        width:8,
        height:8,
        borderRadius:4,
        marginLeft:-4
    },
    hdText:{
        alignItems:'center',
        marginHorizontal:20,
        flexDirection:'row',
        marginTop:40
    },
    textFile:{
        fontSize:34,
        color:Colors.colors.light,
        flex:1,
    },
    topText:{
        flexDirection:'row',
        marginHorizontal:20,
        marginTop:10
    },
    le:{
        color:Colors.colors.light,
    },
    ico:{
        marginTop:20,
        marginHorizontal:1.5
    },
    ri:{
        color:Colors.colors.yellow,
        marginLeft:4,
    },
    sideTab:{
        flexDirection:'row',
        marginHorizontal:-15,
        marginTop:40,
    },
    tab1:{
        color:Colors.colors.yellow,
        transform:[{rotate:"-90deg"}],
        marginTop:60
    },
    tab2:{
        color:Colors.colors.light,
        transform:[{rotate:"-90deg"}],
        marginTop:120
    },
    card:{
        backgroundColor:Colors.colors.red,
        height:370,
        width:210,
        borderRadius:20,
        marginLeft:-800
    },
    top:{
        padding:20,
        flexDirection:'row',
        alignItems:'center'
    },
    textTop:{
        color:Colors.colors.light,
        fontSize:16,
        opacity:1
    },
    per:{
        color:Colors.colors.light,
    },
    pie: {
		height: 150,
		marginTop: 15,
	},
    gb:{
        marginTop:5,
        color:Colors.colors.light,
    },
    space:{
        color:Colors.colors.light,
        fontSize:24
    },
    center:{
        position:'absolute',
        alignSelf:'center',
        marginTop:90,
        alignItems:'center'
    },
    col:{
        flexDirection:'row',
        alignItems:'center',
    }
})