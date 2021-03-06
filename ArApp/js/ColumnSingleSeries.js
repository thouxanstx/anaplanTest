"use strict";
import React, { Component } from "react";
import { examples, chartColors } from "./chartExamples";
import { ViroPolyline, ViroMaterials, ViroText } from "react-viro";
import { StyleSheet } from 'react-native';
import { uniqueKeyGenerator} from "./utils"
 
//--------------------
//Column single series
//--------------------
var scaler = 2150000; //number to scale from data set to world position
var columnY; //variable to hold the Y positions of Columns in the Column Chart
var startPoint = { x: 0, y: 0, z: 0}; //start X, Y and Z for Columns in the Column Chart
var endPoint = {x: -0.3, y: columnY, z: 0}// end X, Y and Z for Columns in the Column Chart
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
export const columnMaterials = ["colMat2"];
export const labelMaterials = ["colMat"];

export const columns = (columnSingleSeries) => {
  
  return columnSingleSeries.column[0].seriesData.map(({ y }, index) => {
    const position = y / scaler;
    const endPointX = (position < 0) ? position + 0.3 : position; 
    const { label } = columnSingleSeries.column[0];
    const columnShiftX = .3;

    return(
      <React.Fragment key = {uniqueKeyGenerator()}>
        <ViroPolyline 
          position={[-0.5,-1,0]} 
          points={[[startPoint.x,startPoint.y - (index * columnShiftX),startPoint.z], [endPointX,endPoint.y -(index * columnShiftX),endPoint.z]]} 
          thickness={0.01} 
          materials={columnMaterials[0]} />
        <ViroPolyline 
          position={[labelPos.x, labelPos.y, labelPos.z]} 
          points={[[labelPoints.x, labelPoints.y, labelPoints.z]]} 
          thickness={0.01} 
          materials={labelMaterials[0]} />,
        <ViroText text = {label} width={10} height={100} position={[labelNamePos.x, labelNamePos.y, labelNamePos.z]} style={styles.labStyle} />
      </React.Fragment>
    )
  });
}

