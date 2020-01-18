import React, {Component} from "react"
import  {StyleSheet, Text, View} from "react-native";
class Forecast extends Component{

    render(){
        console.log(Math.floor(this.props.temp));
        return (
            <View style={styles.container}>
                <Text style={styles.bigText}>{this.props.main}</Text>
                <Text style={styles.mainText}>
                    Current condition {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {Math.floor(this.props.temp)}˚C
                   
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{height:170},
    bigText:{flex:20,
    fontSize:40,
textAlign:"center",
color:"#FFFFFF"
},
mainText:{flex:1, fontSize:26, textAlign:"center", color:"#FFFFFF",padding:30}
});

export default Forecast;