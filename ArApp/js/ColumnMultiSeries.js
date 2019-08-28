"use strict";
import React, { Component } from "react";
import { examples } from "./chartExamples";
import {
  ViroPolyline
} from "react-viro";

//-------------------
//Column Multi Series
//-------------------
var scaler = 2150000; //variable to down scale the data to an accurate world co-ordinate
var colMultiY; //variable to hold the Y positions of Columns in the Column Chart
var startPoint = [-0.2, 0, 0]; //start X, Y and Z for Columns in the Column Chart
var endPoint = [-0.5, colMultiY, 0]// end X, Y and Z for Columns in the Column Chart
export const colMulti = []; //array to hold the Column Polylines
var rightAxesCheck;
var rightAxisDivider = examples["Column multi series"]["rightAxisMultiplier"];

//For loop for creating the first series of columns
for(var i = 0;i < 8; i++)
{       
  colMultiY = examples["Column multi series"]["column"][0]["seriesData"][i]["y"] //set the ColumnY var to the data in chartExamples dataset
  
  //check if show on right axis is true
  rightAxesCheck = examples["Column multi series"]["column"][0]["showOnRightAxis"]

  //if it is true, divide the number by the right axes divider first
  if (rightAxesCheck == true)
  {
    colMultiY = colMultiY / rightAxisDivider
  }
  colMultiY = colMultiY / scaler //divide it by a number to get a position in world space
  endPoint = [endPoint[0] += 0.3, colMultiY, 0] //set the end point for the Column (add 0.3 to the  end X position to match it with the start X position)
  //Add the Column to the Column Array with the variables set
  colMulti.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline 
        position={[-0.5,-1,0]} 
        points={[[startPoint[0],startPoint[1],startPoint[2]], [endPoint[0],endPoint[1],endPoint[2]]]} 
        thickness={0.005} 
        materials={"colMat2"} /></React.Fragment>)
    startPoint[0] += .3 //add to the start X position to create the next Column
}

var startPoint = [0, 0, 0]; //reset X, Y and Z for Columns in the Column Chart
var endPoint = [-0.3, colMultiY, 0]// end X, Y and Z for Columns in the Column Chart

//For loop for creating the second series of columns
for(var j = 0;j < 8; j++)
{       
  colMultiY = examples["Column multi series"]["column"][1]["seriesData"][j]["y"] //set the ColumnY var to the data in chartExamples dataset
  
  //check if show on right axis is true
  rightAxesCheck = examples["Column multi series"]["column"][0]["showOnRightAxis"]

  //if it is true, divide the number by the right axes divider first
  if (rightAxesCheck == true)
  {
    colMultiY = colMultiY / rightAxisDivider
  }
  colMultiY = colMultiY / scaler //divide it by a number to get a position in world space
  endPoint = [endPoint[0] += 0.3, colMultiY, 0] //set the end point for the Column (add 0.3 to the  end X position to match it with the start X position)
  //Add the Column to the Column Array with the variables set
  colMulti.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline 
        position={[-0.6,-1,0]} 
        points={[[startPoint[0],startPoint[1],startPoint[2]], [endPoint[0],endPoint[1],endPoint[2]]]} 
        thickness={0.0051} 
        materials={"colMat10"} /></React.Fragment>)
    startPoint[0] += .3 //add to the start X position to create the next Column
}

var startPoint = [0.2, 0, 0]; //reset X, Y and Z for Columns in the Column Chart
var endPoint = [-0.1, colMultiY, 0]// end X, Y and Z for Columns in the Column Chart

//For loop for creating the third series of columns
for(var k = 0;k < 8; k++)
{       
  colMultiY = examples["Column multi series"]["column"][2]["seriesData"][k]["y"] //set the ColumnY var to the data in chartExamples dataset
  
  //check if show on right axis is true
  rightAxesCheck = examples["Column multi series"]["column"][0]["showOnRightAxis"]

  //if it is true, divide the number by the right axes divider first
  if (rightAxesCheck == true)
  {
    colMultiY = colMultiY / rightAxisDivider
  }
  colMultiY = colMultiY / scaler //divide it by a number to get a position in world space
  endPoint = [endPoint[0] += 0.3, colMultiY, 0] //set the end point for the Column (add 0.3 to the  end X position to match it with the start X position)
  //Add the Column to the Column Array with the variables set
  colMulti.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline 
        position={[-0.7,-1,0]} 
        points={[[startPoint[0],startPoint[1],startPoint[2]], [endPoint[0],endPoint[1],endPoint[2]]]} 
        thickness={0.005} 
        materials={"colMat4"} /></React.Fragment>)
    startPoint[0] += .3 //add to the start X position to create the next Column
}