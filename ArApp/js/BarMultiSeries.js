"use strict";
import React, { Component } from "react";
import {examples} from "./chartExamples";

import {
  ViroPolyline
} from "react-viro";

//----------------
//Bar Multi Series
//----------------
var scaler = 2150000; //variable to down scale the data to an accurate world co-ordinate
var barX; //variable to hold the X positions of Bars in the Bar multi series chart 
export const barsMulti= []; //array to hold the Bar Polylines in the Bar multi series chart
var startPoint = [1.08, 2.09, 0]; //start X, Y and Z for the Bars in the in the Bar multi series chart
var endPoint = [0, 2.09, 0]; //end X, Y and Z for the Bars in the Bar multi series chart

for(var i = 0;i < 8; i++)
{       
  barX = examples["Bar multi series"]["bar"][0]["seriesData"][i]["y"] //set the barX var to the data in chartExamples dataset
  barX = barX /scaler / 185//divide it by a number to get a position in world space

  //adjust the values for world space
  if (barX < -1)
  {
    barX = barX += 2.1
  }
  else if (barX < 0)
  {
    barX = barX += 1.2
  }
  else if (barX > 0 && barX < 1)
  {
    barX = barX += 0.9
  }
  else if (barX > 1)
  {
    barX = barX += 0.1
  }
 
  endPoint[0] = barX //set the Bar End Point to the value held in barX

  //Add the Bar to the Bar Array with the variables set
  barsMulti.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}> 
      <ViroPolyline 
        position={[-0.4,-1,0]} 
        points={[[startPoint[0],startPoint[1],startPoint[2]], [endPoint[0],endPoint[1],endPoint[2]]]} 
        thickness={0.005} 
        materials={"colMat2"} />
    </React.Fragment>)

  startPoint[1] -= .292 //Change Y position for the start of the next bar
  endPoint[1] -= .292 //Change Y position for the end of the next bar
  endPoint[0] = 0 //reset X end Point of next bar
}

startPoint = [1.08, 2.09, 0]; //reset X, Y and Z for Columns in the Column Chart
endPoint = [barX, 2.09, 0]// end X, Y and Z for Columns in the Column Chart

for(var j = 0;j < 8; j++)
{       
  barX = examples["Bar multi series"]["bar"][1]["seriesData"][j]["y"] //set the barX var to the data in chartExamples dataset
  barX = barX /scaler / 185//divide it by a number to get a position in world space

   //adjust the values for world space
   if (barX < -1)
   {
     barX = barX += 2.4
   }
   else if (barX < 0)
   {
     barX = barX += 1.2
   }
   else if (barX > 0 && barX < 1)
   {
     barX = barX += 0.9
   }
   
  endPoint[0] = barX //set the Bar End Point to the value held in barX

  //Add the Bar to the Bar Array with the variables set
  barsMulti.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline 
        position={[-0.4,-1.1,0]} 
        points={[[startPoint[0],startPoint[1] ,startPoint[2]], [endPoint[0],endPoint[1],endPoint[2]]]} 
        thickness={0.005} 
        materials={"colMat10"} />
    </React.Fragment>)

  startPoint[1] -= .292 //Change Y position for the start of the next bar
  endPoint[1] -= .292 //Change Y position for the end of the next bar
  endPoint[0] = 0 //reset X end Point of next bar
}

startPoint = [1.08, 2.09, 0]; //reset X, Y and Z for Columns in the Column Chart
endPoint = [barX, 2.09, 0]// end X, Y and Z for Columns in the Column Chart

for(var k = 0;k < 8; k++)
{       
  barX = examples["Bar multi series"]["bar"][2]["seriesData"][k]["y"] //set the barX var to the data in chartExamples dataset
  barX = barX / 185
  barX = barX / scaler//divide it by a number to get a position in world space

  //adjust the values for world space
  if (barX < -1)
  {
    barX = barX += 2.4
  }
  else if (barX < 0)
  {
    barX = barX += 1.2
  }
  else if (barX > 0 && barX < 1)
  {
    barX = barX += 0.9
  }
  
  endPoint[0] = barX //set the Bar End Point to the value held in barX

  //Add the Bar to the Bar Array with the variables set
  barsMulti.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline 
        position={[-0.4,-1.2,0]} 
        points={[[startPoint[0],startPoint[1] ,startPoint[2]], [endPoint[0],endPoint[1],endPoint[2]]]} 
        thickness={0.005} 
        materials={"colMat4"} />
    </React.Fragment>)

  startPoint[1] -= .292 //Change Y position for the start of the next bar
  endPoint[1] -= .292 //Change Y position for the end of the next bar
  endPoint[0] = 0 //reset X end Point of next bar
}