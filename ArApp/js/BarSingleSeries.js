"use strict";
import React, { Component } from "react";
//import barSingleSeries from "../data/BarSingleSeries.json";
import {uniqueKeyGenerator} from "./utils";
import { ViroPolyline, ViroText } from "react-viro";
import { StyleSheet } from 'react-native';


//---------
//Bar Chart
//---------

var startPoint = { x: 1.08, y: 2.09, z: 0 }; //start X, Y and Z for the Bars in the Bar Chart
var endPoint = { x: 0, y: 2.09, z: 0 }; //end X, Y and Z for the Bars in the Bar Chart
var scaler = 2150000; //variable to down scale the data to an accurate world co-ordinate
var labelPos = {x: -0.5,y:-1, z: 0}; //X, Y and Z position of the label
var labelPoints = {x: -0.6, y: -0.8, z: 0}; //X, Y and Z position of the label colour key 
var labelNamePos = {x: 4.1, y: -1.86, z: 0};
var styles = StyleSheet.create({
  labStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'left',  
  },
});
const barYShift = .292;
export const barsMaterials = ['colMat2'];
export const labelMaterials = ["colMat"];

export const bars = (barSingleSeries) => {

  return barSingleSeries.bar[0].seriesData.map(({ y }, index) => {
    const position = y / scaler;
    const endPointX = (position < 0) ? position + 1.08 : position;
    const { label } = barSingleSeries.bar[0];
    
    return (
      <React.Fragment key={uniqueKeyGenerator()}>
        <ViroPolyline 
          position={[-0.5,-1,0]} 
          points={[[startPoint.x, startPoint.y - (index * barYShift), startPoint.z], [endPointX, endPoint.y - (index * barYShift), endPoint.z]]} 
          thickness={0.01} 
          materials={barsMaterials[0]} />
        </React.Fragment>,
      <React.Fragment key={uniqueKeyGenerator()}>
        <ViroPolyline 
          position={[labelPos.x, labelPos.y, labelPos.z]} 
          points={[[labelPoints.x, labelPoints.y, labelPoints.z]]} 
          thickness={0.01} 
          materials={labelMaterials[0]} />,
        </React.Fragment>, 
        <React.Fragment key={uniqueKeyGenerator()}>  
        <ViroText
          text = {label} 
          width={10} height={100} 
          position={[labelNamePos.x, labelNamePos.y, labelNamePos.z]} 
          style={styles.labStyle}/>
      </React.Fragment>
    );   
  });
}