"use strict";
import React, { Component } from "react";
import { examples} from "./chartExamples";
import {
  ViroPolyline,
} from "react-viro";

//----------
//Line Chart
//----------
var scaler = 2150000; //variable to down scale the data to an accurate world co-ordinate
export var lineY; //variable to hold the Y positions of Lines in the Line Chart
export const line = []; //array to hold the Line Polylines
var startPoint = [-0.3, examples["Line single series"]["line"][0]["seriesData"][0]["y"] / scaler, 0]; //start X, Y and Z for the Lines in the Line Chart
var endPoint = [-0.3, 0, 0]; //end X, Y and Z for the Lines in the Line Chart

//For Loop for creating Line graph
for (var i = 0; i < 8; i++) {
  lineY = examples["Line single series"]["line"][0]["seriesData"][i]["y"] //set the lineY var to the data in chartExamples dataset
  lineY = lineY /scaler //divide it by a number to get a position in world space
  endPoint[1] = lineY //set the Line End Point to the value held in lineY

  //Add the Line to the Line Array with the variables set
  line.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline
        position={[-0.2, -1, 0]}
        points={[
          [startPoint[0], startPoint[1], startPoint[2]],
          [endPoint[0], endPoint[1], endPoint[2]]]}
        thickness={0.01}
        materials={"colMat2"}
      /></React.Fragment>
  );
  //Create the dots
  line.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline
        position={[-0.2, -1, 0]}
        points={[
          [startPoint[0], startPoint[1], startPoint[2]],
          [startPoint[0], startPoint[1], startPoint[2]]]}
        thickness={0.02}
        materials={"colMat2"}
      /></React.Fragment>
  );
  //Create the last dot
  if (i == 7)
  {
    line.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [endPoint[0], endPoint[1], endPoint[2]],
            [endPoint[0], endPoint[1], endPoint[2]]]}
          thickness={0.02}
          materials={"colMat2"}
        /></React.Fragment>
      );
    }
  //create the next point
  startPoint[0] = endPoint[0]; //set the next Start Point X to the last End Point X
  startPoint[1] = endPoint[1]; //set the next Start Point Y to the last End Point Y
  endPoint[1] = 0; 
  endPoint[0] += 0.3;
}