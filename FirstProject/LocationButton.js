import React,{component} from 'react';
import Button from "react-native";
const style = {backgroundColor:"#DDDDDD"}

export default class LocationButton extends component{
    _onPress(){
      navigator.geolocation.getCurrentPosition(
        initialPosition =>{
          this.props.onGetCoords(initialPosition.coords.latitude,
            initialPosition.coords.longitude);
        },
        error =>{
          alert(error.message);
        },
        {enableHighAccuracy:true, timeout:20000,maximumAge:1000}
      )
    }
    render(){
      return(
        <Button 
        label="Use Current Location"
        style={style}
        onPress={this._onPress.bind(this)}/>
      )
    }
  }
  
  