"use strict";
import React, { Component } from "react";
import { examples } from "./chartExamples";
import {
  ViroPolyline
} from "react-viro";

//--------------------------------
//Column Multi Series Single Value
//--------------------------------
var scaler = 2150000; //variable to down scale the data to an accurate world co-ordinate
var colMulSingleY; //variable to hold the Y positions of Columns in the Column Multi Series Single value Chart
var startPoint = [-0.1, 0.5, 0]; //start X, Y and Z for Columns Multi Series Single value in the Column Chart
var endPoint = [-0.25, colMulSingleY, 0]// end X, Y and Z for Columns Multi Series Single value in the Column Chart
export const colMulSingle = []; //array to hold the Column Multi Series Single value Polylines
var colMulSingleCol;

//For loop for creating the columns
for(var i = 0; i < 19; i++)
{       
  colMulSingleY = examples["Column multi series single value"]["column"][i]["seriesData"][0]["y"] //set the ColumnY var to the data in chartExamples dataset
  colMulSingleY = colMulSingleY * scaler / 870000000000000 //divide it by a number to get a position in world space
  endPoint = [endPoint[0] += 0.15, colMulSingleY += 0.5, 0] //set the end point for the Column (add 0.3 to the  end X position to match it with the start X position)
  
    //set colours of the bars
    if (i == 0 || i == 9 || i == 18)
      colMulSingleCol = "colMat2"
    if (i == 1 || i == 10)
      colMulSingleCol = "colMat"
    if (i == 2 || i == 11)
      colMulSingleCol = "colMat4"
    if (i == 3 || i == 12)
      colMulSingleCol = "colMat6"
    if (i == 4 || i == 13)
      colMulSingleCol = "colMat5"
    if (i == 5 || i == 14)
      colMulSingleCol = "colMat3"
    if (i == 6 || i == 15)
      colMulSingleCol = "colMat8"
    if (i == 7 || i == 16)
      colMulSingleCol = "colMat9"
    if (i == 8 || i == 17)
      colMulSingleCol = "colMat10"
  
  
  //Add the Column to the Column Array with the variables set
  colMulSingle.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline 
        position={[-0.5,-1,0]} 
        points={[[startPoint[0],startPoint[1],startPoint[2]], [endPoint[0],endPoint[1],endPoint[2]]]} 
        thickness={0.006} 
        materials={colMulSingleCol} /></React.Fragment>)

    startPoint[0] += .15 //add to the start X position to create the next Column


}