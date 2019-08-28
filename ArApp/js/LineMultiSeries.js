"use strict";
import React, { Component } from "react";
import {examples} from "./chartExamples";

import {
  ViroPolyline
} from "react-viro";

//-----------------------
//Line Chart Multi series (next job)
//-----------------------
var scaler = 2150000; //variable to down scale the data to an accurate world co-ordinate
var lineY; //variable to hold the Y positions of Lines in the Line Chart
export const lineMulti = []; //array to hold the Line Polylines
var startPoint = [-0.3, examples["Line multi series"]["line"][0]["seriesData"][0]["y"] / scaler / 185, 0]; //start X, Y and Z for the Lines in the Line Chart
var endPoint = [-0.3, 0, 0]; //end X, Y and Z for the Lines in the Line Chart

//For Loop for creating Line graph
for (var i = 0; i < 8; i++) {


    lineY = examples["Line multi series"]["line"][0]["seriesData"][i]["y"] //set the lineY var to the data in chartExamples dataset
    lineY = lineY /scaler / 185//divide it by a number to get a position in world space
    endPoint[1] = lineY //set the Line End Point to the value held in lineY
  
    //Add the Line to the Line Array with the variables set
    lineMulti.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [endPoint[0], endPoint[1], endPoint[2]]]}
          thickness={0.005}
          materials={"colMat2"}
        /></React.Fragment>
    );
    //Create the dots
    lineMulti.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [startPoint[0], startPoint[1], startPoint[2]]]}
          thickness={0.015}
          materials={"colMat2"}
        /></React.Fragment>
    );
    //Create the last dot
    if (i == 7)
    {
        lineMulti.push(
          <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
            <ViroPolyline
              position={[-0.2, -1, 0]}
              points={[
                [endPoint[0], endPoint[1], endPoint[2]],
                [endPoint[0], endPoint[1], endPoint[2]]]}
              thickness={0.015}
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

  var startPoint = [-0.3, examples["Line multi series"]["line"][1]["seriesData"][0]["y"] / scaler / 185, 0]; //start X, Y and Z for the Lines in the Line Chart
  var endPoint = [-0.3, 0, 0]; //end X, Y and Z for the Lines in the Line Chart

  //For Loop for creating Line graph
for (var j = 0; j < 8; j++) {
    lineY = examples["Line multi series"]["line"][1]["seriesData"][j]["y"] //set the lineY var to the data in chartExamples dataset
    lineY = lineY /scaler / 185//divide it by a number to get a position in world space
    endPoint[1] = lineY //set the Line End Point to the value held in lineY
  
    //Add the Line to the Line Array with the variables set
    lineMulti.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [endPoint[0], endPoint[1], endPoint[2]]]}
          thickness={0.005}
          materials={"colMat10"}
        /></React.Fragment>
    );
    //Create the dots
    lineMulti.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [startPoint[0], startPoint[1], startPoint[2]]]}
          thickness={0.015}
          materials={"colMat10"}
        /></React.Fragment>
    );
    //Create the last dot
    if (j == 7)
    {
      lineMulti.push(
        <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
          <ViroPolyline
            position={[-0.2, -1, 0]}
            points={[
              [endPoint[0], endPoint[1], endPoint[2]],
              [endPoint[0], endPoint[1], endPoint[2]]]}
            thickness={0.015}
            materials={"colMat10"}
          /></React.Fragment>
      );
    }
    //create the next point
    startPoint[0] = endPoint[0]; //set the next Start Point X to the last End Point X
    startPoint[1] = endPoint[1]; //set the next Start Point Y to the last End Point Y
    endPoint[1] = 0; 
    endPoint[0] += 0.3;
  }

  var startPoint = [-0.3, examples["Line multi series"]["line"][2]["seriesData"][0]["y"] / scaler / 185, 0]; //start X, Y and Z for the Lines in the Line Chart
  var endPoint = [-0.3, 0, 0]; //end X, Y and Z for the Lines in the Line Chart

  //For Loop for creating Line graph
for (var k = 0; k < 8; k++) {
    lineY = examples["Line multi series"]["line"][2]["seriesData"][k]["y"] //set the lineY var to the data in chartExamples dataset
    lineY = lineY /scaler / 185//divide it by a number to get a position in world space
    endPoint[1] = lineY //set the Line End Point to the value held in lineY
  
    //Add the Line to the Line Array with the variables set
    lineMulti.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [endPoint[0], endPoint[1], endPoint[2]]]}
          thickness={0.005}
          materials={"colMat4"}
        /></React.Fragment>
    );
    //Create the dots
    lineMulti.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [startPoint[0], startPoint[1], startPoint[2]]]}
          thickness={0.015}
          materials={"colMat4"}
        /></React.Fragment>
    );
    //Create the last dot
    if (k == 7)
    {
      lineMulti.push(
        <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
          <ViroPolyline
            position={[-0.2, -1, 0]}
            points={[
              [endPoint[0], endPoint[1], endPoint[2]],
              [endPoint[0], endPoint[1], endPoint[2]]]}
            thickness={0.015}
            materials={"colMat4"}
        /></React.Fragment>
      );
    }
    //create the next point
    startPoint[0] = endPoint[0]; //set the next Start Point X to the last End Point X
    startPoint[1] = endPoint[1]; //set the next Start Point Y to the last End Point Y
    endPoint[1] = 0; 
    endPoint[0] += 0.3;
  }