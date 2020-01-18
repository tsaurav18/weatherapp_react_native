
import React, { Component } from 'react'
import Forecast from "./Forecast"
// import LocationButton from "./LocationButton"
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  ImageBackground,
  
} from 'react-native';
import OpenWeatherMap from "./open_weather_map"



export default class WeatherProject extends Component {
 constructor(props){
   super(props);
   this.state = {zip: "",forecast:null};
 
 }


 _handleTextChange = event=>{
     let zip= event.nativeEvent.text;
     OpenWeatherMap.fetchForecast(zip).then(forecast=>{
      console.log(forecast);
         this.setState({forecast:forecast })
         
     })
     
 
 };
  render() {
      let content =null;
      if(this.state.forecast!=null){
          content=(
              <Forecast main={this.state.forecast.main}
              description={this.state.forecast.description}
              temp={(this.state.forecast.temp-32)*5/9}/> 
          )
      }
    return (
      <View style={styles.container}>
          <ImageBackground
          source={this.state.photoSource}
         resizeMode="cover"
         
          style={styles.backdrop}>
          <View style={styles.overlay}>
              <View style={styles.row}>
                  <Text style={styles.mainText}>
                      Current weather for
                  </Text>
                  <View style={styles.zipContainer}>
                  <TextInput style ={[styles.zipCode,styles.mainText]} onSubmitEditing = {this._handleTextChange}
                  underlineColorAndroid="transparent"
                  width={100} />
        
                  </View>
                  {/* <View>
                    <LocationButton onGetCoords={this._getForecastForCoords}/>
                  </View> */}
              </View>
              {content}
          </View>
          </ImageBackground>
        
    </View>
            );
  }
}
const baseFontSize =23;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    
    
  },
  backdrop:{flex:1,flexDirection:"column"},
  overlay:{
    paddingTop:5,
    backgroundColor: "#000000",
    opacity:0.5,
    flexDirection:"column",
    textAlign:"center",
    marginTop:80,
    
  },
  row:{
      flexDirection:"row",
      flexWrap:"nowrap",
      alignItems:"flex-start",
      padding:100
  },
  zipContainer:{
      height:baseFontSize,
      borderBottomColor:"#DDDDDD",
      borderBottomWidth:1,
      marginLeft:25,
      marginTop:3,
      width:100
      

  },
  zipCode:{
      flex:1,
      flexBasis:1,
      width:50,
      height:baseFontSize
  },
  mainText:{
      fontSize:baseFontSize, color:"#FFFFFF", 
  }
})



