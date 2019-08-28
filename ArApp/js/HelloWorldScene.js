"use strict";
import React, { Component } from "react";
import { ViroConstants } from "react-viro";
import { StyleSheet, AppRegistry, View, StatusBar, Text } from "react-native";
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

import {
  ViroScene,
  ViroImage,
  Viro360Image,
  ViroAmbientLight,
  ViroSpotLight,
  ViroPolyline,
  ViroText,
  ViroMaterials,
  ViroPolygon,
  ViroNode,
} from "react-viro";

//Create a Style Sheet for the Font used for Viro Text Objects
var styles = StyleSheet.create({
  graphFont: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});
export default class HelloWorldScene extends Component {
  constructor() {
    super();
    this.state = {} // Set initial state here
  }
  render() {
    return (   
      // Create the Viro Scene
      <ViroScene>
        {/* Create a 360 background for VR */}
        <Viro360Image source={require('./res/red.jpg')} />
        {/* Create a Viro Node to hold all objects as Children */}
        <ViroNode
            position={[0, 0, -0.5]}
            rotation={[0, 0, 0]}
            scale={[0.1, 0.1, 0.1]}
          >
            {/* Create a Background for the Charts */}
            <ViroImage
              position={[0.4, -0.3, -0.11]}
              height={4.5}
              width={5}
              placeholderSource={require("./res/white.jpg")}
              source={{ uri: "https://my_s3_image.jpg" }}                    
            />

            {/* Create a Title and lighting */}
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
            {/* 
            Draw the arrays that make up a graph 

            First the Axes
            xAxesNames = Names of the X axes of the graph
            yAxesNames - Names of the Y axes of the graph
            yAxesBarNames - Names of the Y Axes for Bar Charts
            xAxesBarNames - Names of the X Axes for Bar Charts
            xAxesBarLines - The Lines to appear behind the bars to help identify the value
            yAxesMulNames - Names of the Y Axes for multi Column and Line Charts
            xMulSingleNames - Names of the X Axes for Column multi series single value
            xyMulSingleNames - Names of the Y Axes for Column multi series single value
            xAxesBarMulNames - Names on the Top and Bottom X Axes of the Bar Multi Series
            xAxesAreaMulNames - Names of the X Axes for Area Multi Series chart
            yAxesAreaMulNames - Names of the Y Axes for Area Multi Series chart

            And then the chart we want to make - current choices:
            columns - Column single series
            line - Line single series
            bars - bar single series
            areaLine + areaPoly - area single series (line component and area component)
            pieTriangles - pie chart
            colMulti - column multi series
            colMulSingle - column multi series single value
            barsMulti - bar multi series
            lineMulti - line multi series
            areaMulLine + areaMulPoly - area multi series (line component and are component)
            */}

          {areaMulLine}
          {areaMulPoly}
          {xAxesAreaMulNames}
          {yAxesAreaMulNames}
          {labels}

          </ViroNode> 
      </ViroScene>   
    );
  }
}

//Create Viro material to be used for the object on the charts
ViroMaterials.createMaterials({

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

module.exports = HelloWorldScene;