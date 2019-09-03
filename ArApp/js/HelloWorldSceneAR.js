"use strict";
import React, { Component } from "react";
import { ViroConstants } from "react-viro";
import { StyleSheet, AppRegistry, View, StatusBar, Text, TouchableHighlight } from "react-native";
import { chartExamples, examples, chartColors } from "./chartExamples";
import {xAxesNames, yAxesNames, yAxesMulNames, xMulSingleNames, yMulSingleNames, xAxesBarNames, yAxesBarNames, xAxesBarMulNames,
xAxesAreaMulNames, yAxesAreaMulNames} from "./AxisNames";
import {labels} from "./Labels"

//Import charts, only one should be used at a time in current version
import {columns} from "./ColumnSingleSeries"
import {line} from "./LineSingleSeries"
import {bars} from "./BarSingleSeries"
import {areaLine, areaPoly} from "./AreaSingleSeries"
import {pieTriangles} from "./PieChart"
import {colMulti} from "./ColumnMultiSeries"
import {colMulSingle} from "./ColumnMultiSeriesSingleValue"
import {barsMulti} from "./BarMultiSeries" 
import {lineMulti} from  "./LineMultiSeries"
import {areaMulLine, areaMulPoly} from "./AreaMultiSeries"
import barSingleSeries from '../data/BarSingleSeries'
import lineSingleSeries from '../data/LineSingleSeries'

import {
  ViroARScene,
  ViroImage,
  ViroAmbientLight,
  ViroSpotLight,
  ViroPolyline,
  ViroText,
  ViroMaterials,
  ViroPolygon,
  ViroAnimations,
  ViroNode,
  ViroARImageMarker,
  ViroARTrackingTargets
} from "react-viro";

const UNSET = "UNSET";
const GRAPH_TYPE = "Bar";
const GRAPH_TYPE2 = "Line"; 
const initialView = UNSET;

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();
    // Set initial state here
    this.state = {
      graphType: GRAPH_TYPE,
      //text: "Initializing AR..."
      
    }
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._getNewGraphButtonPress = this._getNewGraphButtonPress.bind(this);
    this._getBar = this._getBar.bind(this);
    this._getLine = this._getLine.bind(this);
    this._getGraphSelector = this._getGraphSelector.bind(this);
  }

//   render() {
//     if(this.state.graphType == UNSET){
//       return this._getGraphSelector();
//     }else if(this.state.graphType == GRAPH_TYPE ){
//       return this._getBar();
//     }else if(this.state.graphType == GRAPH_TYPE2){
//       return this._getLine();
//     }
// }

  render() {
    switch(this.state.graphType) {
      case "UNSET":
        return this._getGraphSelector();
      case "Bar":
        return this._getBar();
      case "Line":
        return this._getLine();
      default:
        return (<></>);
    }
  }

  _getGraphSelector(){
    return (
      <View style={styles.outer}>
        <View style={styles.inner}>

          <Text style={styles.graphFont} text = {"Choose your desired graph"} >
            
          </Text>

          <TouchableHighlight style={styles.buttons}
            onPress={this._getNewGraphButtonPress(GRAPH_TYPE)}
            underlayColor={'#68a0ff'} >

            <Text style={styles.buttonText}>Bar</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttons}
            onPress={this._getNewGraphButtonPress(GRAPH_TYPE2)}
            underlayColor={'#68a0ff'} >

            <Text style={styles.buttonText}>Line</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _getBar(){
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
       
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
        />
       
        <ViroARImageMarker target={"Anchor"}>
          <ViroNode
            position={[0, 0, -0.5]}
            rotation={[0, 0, 0]}
            scale={[0.1, 0.1, 0.1]}
          >
            <ViroImage
              position={[0.4, -0.3, -0.11]}
              height={4.5}
              width={5}
              placeholderSource={require("./res/white.jpg")}
              source={{ uri: "https://my_s3_image.jpg" }}                    
            />

            <ViroText
              text="Anaplan Graph"
              width={10}
              height={100}
              position={[0.5, 1.5, 0]}
              style={styles.graphFont}
            />
            <ViroAmbientLight color={"#aaaaaa"} />
            <ViroSpotLight
              innerAngle={5}
              outerAngle={90}
              direction={[0, -1, -0.2]}
              position={[0, 3, 1]}
              color="#ffffff"
              castsShadow={true}
            />
            {bars(barSingleSeries)}
            {yAxesBarNames}
            {xAxesBarNames}
            </ViroNode>
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _getLine(){
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
        />
       
        <ViroARImageMarker target={"Anchor"}>
          
          <ViroNode
            position={[0, 0, -0.5]}
            rotation={[0, 0, 0]}
            scale={[0.1, 0.1, 0.1]}
          >
           
            <ViroImage
              position={[0.4, -0.3, -0.11]}
              height={4.5}
              width={5}
              placeholderSource={require("./res/white.jpg")}
              source={{ uri: "https://my_s3_image.jpg" }}                    
            />

           
            <ViroText
              text="Anaplan Graph"
              width={10}
              height={100}
              position={[0.5, 1.5, 0]}
              style={styles.graphFont}
            />
            <ViroAmbientLight color={"#aaaaaa"} />
            <ViroSpotLight
              innerAngle={5}
              outerAngle={90}
              direction={[0, -1, -0.2]}
              position={[0, 3, 1]}
              color="#ffffff"
              castsShadow={true}
            />
            {line(lineSingleSeries)}
            {xAxesNames}
            {yAxesNames}
            </ViroNode>
        </ViroARImageMarker>
      </ViroARScene>  
    );
  }

  _getNewGraphButtonPress(graphType) {
    return () => {
      this.setState({
        graphType : graphType
      })
    }
  }

  _resetGraph = () => {
    this.setState({
      graphType : UNSET
    })
  }
  
  //Check Tracking
  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "It works!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}


//Test Viro Animation
ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90",
      rotateZ: "+=90",
      opacity: "-=0.02",
      positionX: "+=0.1"
    },
    duration: 250 //.25 seconds
  }
});

//Create the Image to be used as The marker in AR
ViroARTrackingTargets.createTargets({
  Anchor: {
    source: require("./res/Anchor4.jpg"),
    orientation: "Up",
    physicalWidth: 0.2 // real world width in meters
  }
});

var styles = StyleSheet.create({
  graphFont: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  }
});

//Create Viro material to be used for the object on the charts
ViroMaterials.createMaterials({

  //test to make a dynamic material that can be used for all chart components (in progress)
  col: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: examples["Column single series"]["column"][0]["color"]},  //#00C8B2
  
  //Colours for chart components, taken from chartColors array in dataset provided
  colMat: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: chartColors[0] },  //#00C8B2
  colMat2: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: chartColors[1] }, //#413EA7
  colMat3: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: chartColors[2] }, //#F44A22
  colMat4: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: chartColors[3] }, //#FFA437
  colMat5: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: chartColors[4] }, //#00A8EC
  colMat6: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: chartColors[5] }, //#F7E64F
  colMat7: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: chartColors[6] }, //#5B7637
  colMat8: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: chartColors[7] }, //#546775
  colMat9: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: chartColors[8] }, //#B31C1C
  colMat10: {shininess: 2.0, lightingModel: "Lambert", diffuseColor: chartColors[9]}  //#8C3B8C
});

module.exports = HelloWorldSceneAR;