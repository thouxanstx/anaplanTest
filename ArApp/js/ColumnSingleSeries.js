"use strict";
import React, { Component } from "react";
import { examples, chartColors } from "./chartExamples";
import {
  ViroPolyline,
  ViroMaterials
} from "react-viro";


//--------------------
//Column single series
//--------------------
var scaler = 2150000; //number to scale from data set to world position
var columnY; //variable to hold the Y positions of Columns in the Column Chart
var startPoint = [0, 0, 0]; //start X, Y and Z for Columns in the Column Chart
var endPoint = [-0.3, columnY, 0]// end X, Y and Z for Columns in the Column Chart
export const columns = []; //array to hold the Column Polylines

//For loop for creating the columns
for(var i = 0;i < 8; i++)
{       
  columnY = examples["Column single series"]["column"][0]["seriesData"][i]["y"] //set the ColumnY var to the data in chartExamples dataset
  columnY = columnY / scaler //divide it by a number to get a position in world space
  endPoint = [endPoint[0] += 0.3, columnY, 0] //set the end point for the Column (add 0.3 to the  end X position to match it with the start X position)
  //Add the Column to the Column Array with the variables set
  columns.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline 
          position={[-0.5,-1,0]} 
          points={[[startPoint[0],startPoint[1],startPoint[2]], [endPoint[0],endPoint[1],endPoint[2]]]} 
          thickness={0.01} 
          materials={"colMat2"} /></React.Fragment>)
  startPoint[0] += .3 //add to the start X position to create the next Column
}