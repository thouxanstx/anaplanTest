"use strict";
import React, { Component } from "react";
import { examples} from "./chartExamples";
import {
  ViroPolyline
} from "react-viro";

//---------
//Bar Chart
//---------
var scaler = 2150000; //variable to down scale the data to an accurate world co-ordinate
var barX; //variable to hold the X positions of Bars in the Chart 
export const bars= []; //array to hold the Bar Polylines
var startPoint = [1.08, 2.09, 0]; //start X, Y and Z for the Bars in the Bar Chart
var endPoint = [0, 2.09, 0]; //end X, Y and Z for the Bars in the Bar Chart

//For loop for creating the bars
for(var i = 0;i < 8; i++)
{       
  barX = examples["Bar single series"]["bar"][0]["seriesData"][i]["y"] //set the barX var to the data in chartExamples dataset
  barX = barX /scaler //divide it by a number to get a position in world space

  //if the value is less than 0, add 1.8 to it to adjust it for world space co-ordinate
  if (barX < 0)
  {
    barX = barX += 1.8
  }
 
  endPoint[0] = barX //set the Bar End Point to the value held in barX

  //Add the Bar to the Bar Array with the variables set
  bars.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline 
        position={[-0.5,-1,0]} 
        points={[[startPoint[0],startPoint[1],startPoint[2]], [endPoint[0],endPoint[1],endPoint[2]]]} 
        thickness={0.01} 
        materials={"colMat2"} />
    </React.Fragment>
    )
    

  startPoint[1] -= .292 //Change Y position for the start of the next bar
  endPoint[1] -= .292 //Change Y position for the end of the next bar
  endPoint[0] = 0 //reset X end Point of next bar
}