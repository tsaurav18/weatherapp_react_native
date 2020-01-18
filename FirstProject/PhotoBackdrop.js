import React,{Component} from 'react';
import{Image, CameraRoll} from "react-native";
export default class PhotoBackdrop extends Component{
    constructor(props){
        super(props);
        this.state={photoSource:null};

    }

componentDidMount() {
    CameraRoll.getPhotos({first:1}).then(data=>{
        this.setState({photoSource:{uri:data.edges[3].node.image.uri}});

    },
    error=>{
        console.warn(error);
    });

};
render(){
    return (
        <Image
        style={style.backdrop}
        source={this.state.photoSource}
        resizeMode="cover">{this.props.Children}</Image>

    );
}
}






