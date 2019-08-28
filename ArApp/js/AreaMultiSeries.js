"use strict";
import React, { Component } from "react";
import {examples} from "./chartExamples";

import {
  ViroPolyline,
  ViroPolygon
} from "react-viro";

//----------
//Area Multi Series Chart
//----------
var scaler = 2150000; //variable to down scale the data to an accurate world co-ordinat
var areaY; //variable to hold the Y positions of Line in the Area Chart
export const areaMulLine = []; //array to hold the Area Line Polylines
var startPoint = [-0.3, examples["Area multi series"]["area"][0]["seriesData"][0]["y"] / scaler / 2.5, 0]; //start X, Y and Z for the Lines in the Area Chart
var endPoint = [-0.3, 0, 0]; //end X, Y and Z for the Area Lines in the Line Chart
export const areaMulPoly = []; //array to hold the Polygon that will reprsent the Area on the Area Chart
var areaPolyPos =[]; //array to hold the positions for the polygon

//For Loop for creating Area graph
for (var i = 0; i < 8; i++) {
    areaY = examples["Area multi series"]["area"][0]["seriesData"][i]["y"] //set the areaY var to the data in chartExamples dataset
    areaY = areaY /scaler / 2.5//divide it by a number to get a position in world space
    endPoint[1] = areaY //set area Line End point to the value held in areaY
  
    //Add the Line to the Line Array with the variables set
    areaMulLine.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [endPoint[0], endPoint[1], endPoint[2]]
          ]}
          thickness={0.01}
          materials={"colMat2"}
        /></React.Fragment>
    );
  
    //Add the start point co-ordinates to the array that hold the positions for the polygon
    if (i <= 7)
    {
    areaPolyPos.push(startPoint[0], startPoint[1]);
    }
    
    //Create the dots
    areaMulLine.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [startPoint[0], startPoint[1], startPoint[2]]
          ]}
          thickness={0.02}
          materials={"colMat2"}
        /></React.Fragment>
    );
  
    //Create the last dot
    if (i == 7)
    {
        areaMulLine.push(
          <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
            <ViroPolyline
              position={[-0.2, -1, 0]}
              points={[
                [endPoint[0], endPoint[1], endPoint[2]],
                [endPoint[0], endPoint[1], endPoint[2]]
              ]}
              thickness={0.02}
              materials={"colMat2"}
            /></React.Fragment>
        );
  
        areaPolyPos.push(endPoint[0], endPoint[1]); //add the final end point co-ordinates to the polygon position array
  
        //Create the Polygon used to represent the area in the Area Chart using the co-ordinates stored in the areaPolyPos array
        areaMulPoly.push(
          <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
            <ViroPolygon rotation={[0, 0, 0]}
                position={[-0.2,-1,0]}
                opacity ={0.5}
                vertices={[[-0.3,-0.05], [areaPolyPos[0],areaPolyPos[1]], [areaPolyPos[2],areaPolyPos[3]], [areaPolyPos[4],areaPolyPos[5]], [areaPolyPos[6],areaPolyPos[7]],
                            [areaPolyPos[8],areaPolyPos[9]], [areaPolyPos[10],areaPolyPos[11]], [areaPolyPos[12],areaPolyPos[13]], [areaPolyPos[14],areaPolyPos[15]], 
                            [areaPolyPos[16],areaPolyPos[17]], [1.8, -0.05]]}
                materials={"colMat2"}/></React.Fragment>)
      }
  
    //create the next point
    startPoint[0] = endPoint[0]; //set the next Start Point X to the last End Point X
    startPoint[1] = endPoint[1]; //set the next Start Point Y to the last End Point Y
    endPoint[1] = 0;
    endPoint[0] += 0.3;
  }

  startPoint = [-0.3, examples["Area multi series"]["area"][1]["seriesData"][0]["y"] / scaler / 2.5, 0]; //start X, Y and Z for the Lines in the Area Chart
  endPoint = [-0.3, 0, 0]; //end X, Y and Z for the Area Lines in the Line Chart
  areaPolyPos.length = 0;

//For Loop for creating Area graph
for (var j = 0; j < 8; j++) {
    areaY = examples["Area multi series"]["area"][1]["seriesData"][j]["y"] //set the areaY var to the data in chartExamples dataset
    areaY = areaY /scaler / 2.5//divide it by a number to get a position in world space
    endPoint[1] = areaY //set area Line End point to the value held in areaY
  
    //Add the Line to the Line Array with the variables set
    areaMulLine.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [endPoint[0], endPoint[1], endPoint[2]]
          ]}
          thickness={0.01}
          materials={"colMat10"}
        /></React.Fragment>
    );
  
    //Add the start point co-ordinates to the array that hold the positions for the polygon
    if (j <= 7)
    {
    areaPolyPos.push(startPoint[0], startPoint[1]);
    }
    
    //Create the dots
    areaMulLine.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [startPoint[0], startPoint[1], startPoint[2]]
          ]}
          thickness={0.02}
          materials={"colMat10"}
        /></React.Fragment>
    );
  
    //Create the last dot
    if (j == 7)
    {
        areaMulLine.push(
          <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
            <ViroPolyline
              position={[-0.2, -1, 0]}
              points={[
                [endPoint[0], endPoint[1], endPoint[2]],
                [endPoint[0], endPoint[1], endPoint[2]]
              ]}
              thickness={0.02}
              materials={"colMat10"}
            /></React.Fragment>
        );
  
        areaPolyPos.push(endPoint[0], endPoint[1]); //add the final end point co-ordinates to the polygon position array
  
        //Create the Polygon used to represent the area in the Area Chart using the co-ordinates stored in the areaPolyPos array
        areaMulPoly.push(
          <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
            <ViroPolygon rotation={[0, 0, 0]}
                position={[-0.2,-1,0.01]}
                opacity ={0.5}
                vertices={[[-0.3,-0.05], [areaPolyPos[0],areaPolyPos[1]], [areaPolyPos[2],areaPolyPos[3]], [areaPolyPos[4],areaPolyPos[5]], [areaPolyPos[6],areaPolyPos[7]],
                            [areaPolyPos[8],areaPolyPos[9]], [areaPolyPos[10],areaPolyPos[11]], [areaPolyPos[12],areaPolyPos[13]], [areaPolyPos[14],areaPolyPos[15]], 
                            [areaPolyPos[16],areaPolyPos[17]], [1.8, -0.05]]}
                materials={"colMat10"}/></React.Fragment>)
      }
  
    //create the next point
    startPoint[0] = endPoint[0]; //set the next Start Point X to the last End Point X
    startPoint[1] = endPoint[1]; //set the next Start Point Y to the last End Point Y
    endPoint[1] = 0;
    endPoint[0] += 0.3;
  }

   startPoint = [-0.3, examples["Area multi series"]["area"][1]["seriesData"][0]["y"] / scaler / 2.5, 0]; //start X, Y and Z for the Lines in the Area Chart
  endPoint = [-0.3, 0, 0]; //end X, Y and Z for the Area Lines in the Line Chart
  areaPolyPos.length = 0;

  //For Loop for creating Area graph
for (var j = 0; j < 8; j++) {
    areaY = examples["Area multi series"]["area"][1]["seriesData"][j]["y"] //set the areaY var to the data in chartExamples dataset
    areaY = areaY /scaler / 2.5//divide it by a number to get a position in world space
    endPoint[1] = areaY //set area Line End point to the value held in areaY
  
    //Add the Line to the Line Array with the variables set
    areaMulLine.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [endPoint[0], endPoint[1], endPoint[2]]
          ]}
          thickness={0.01}
          materials={"colMat10"}
        /></React.Fragment>
    );
  
    //Add the start point co-ordinates to the array that hold the positions for the polygon
    if (j <= 7)
    {
    areaPolyPos.push(startPoint[0], startPoint[1]);
    }
    
    //Create the dots
    areaMulLine.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [startPoint[0], startPoint[1], startPoint[2]]
          ]}
          thickness={0.02}
          materials={"colMat10"}
        /></React.Fragment>
    );
  
    //Create the last dot
    if (j == 7)
    {
        areaMulLine.push(
          <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
            <ViroPolyline
              position={[-0.2, -1, 0]}
              points={[
                [endPoint[0], endPoint[1], endPoint[2]],
                [endPoint[0], endPoint[1], endPoint[2]]
              ]}
              thickness={0.02}
              materials={"colMat10"}
            /></React.Fragment>
        );
  
        areaPolyPos.push(endPoint[0], endPoint[1]); //add the final end point co-ordinates to the polygon position array
  
        //Create the Polygon used to represent the area in the Area Chart using the co-ordinates stored in the areaPolyPos array
        areaMulPoly.push(
          <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
            <ViroPolygon rotation={[0, 0, 0]}
                position={[-0.2,-1,0.01]}
                opacity ={0.5}
                vertices={[[-0.3,-0.05], [areaPolyPos[0],areaPolyPos[1]], [areaPolyPos[2],areaPolyPos[3]], [areaPolyPos[4],areaPolyPos[5]], [areaPolyPos[6],areaPolyPos[7]],
                            [areaPolyPos[8],areaPolyPos[9]], [areaPolyPos[10],areaPolyPos[11]], [areaPolyPos[12],areaPolyPos[13]], [areaPolyPos[14],areaPolyPos[15]], 
                            [areaPolyPos[16],areaPolyPos[17]], [1.8, -0.05]]}
                materials={"colMat10"}/></React.Fragment>)
      }
  
    //create the next point
    startPoint[0] = endPoint[0]; //set the next Start Point X to the last End Point X
    startPoint[1] = endPoint[1]; //set the next Start Point Y to the last End Point Y
    endPoint[1] = 0;
    endPoint[0] += 0.3;
  }


  startPoint = [-0.3, examples["Area multi series"]["area"][2]["seriesData"][0]["y"] / scaler / 2.5, 0]; //start X, Y and Z for the Lines in the Area Chart
  endPoint = [-0.3, 0, 0]; //end X, Y and Z for the Area Lines in the Line Chart
  areaPolyPos.length = 0;

    //For Loop for creating Area graph
    for (var k = 0; k < 4; k++) {
    areaY = examples["Area multi series"]["area"][2]["seriesData"][k]["y"] //set the areaY var to the data in chartExamples dataset
    areaY = areaY /scaler / 2.5//divide it by a number to get a position in world space
    endPoint[1] = areaY //set area Line End point to the value held in areaY
  
    //Add the Line to the Line Array with the variables set
    areaMulLine.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [endPoint[0], endPoint[1], endPoint[2]]
          ]}
          thickness={0.01}
          materials={"colMat4"}
        /></React.Fragment>
    );
  
    //Add the start point co-ordinates to the array that hold the positions for the polygon
    if (k <= 3)
    {
    areaPolyPos.push(startPoint[0], startPoint[1]);
    }
    
    //Create the dots
    areaMulLine.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolyline
          position={[-0.2, -1, 0]}
          points={[
            [startPoint[0], startPoint[1], startPoint[2]],
            [startPoint[0], startPoint[1], startPoint[2]]
          ]}
          thickness={0.02}
          materials={"colMat4"}
        /></React.Fragment>
    );
  
    //Create the last dot
    if (k == 3)
    {
        areaMulLine.push(
          <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
            <ViroPolyline
              position={[-0.2, -1, 0]}
              points={[
                [endPoint[0], endPoint[1], endPoint[2]],
                [endPoint[0], endPoint[1], endPoint[2]]
              ]}
              thickness={0.02}
              materials={"colMat4"}
            /></React.Fragment>
        );
  
        areaPolyPos.push(endPoint[0], endPoint[1]); //add the final end point co-ordinates to the polygon position array
  
        //Create the Polygon used to represent the area in the Area Chart using the co-ordinates stored in the areaPolyPos array
        areaMulPoly.push(
          <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
            <ViroPolygon rotation={[0, 0, 0]}
                position={[-0.2,-1,0.02]}
                opacity ={0.5}
                vertices={[[-0.3,-0.05], [areaPolyPos[0],areaPolyPos[1]], [areaPolyPos[2],areaPolyPos[3]], [areaPolyPos[4],areaPolyPos[5]], [areaPolyPos[6],areaPolyPos[7]],
                            [areaPolyPos[8],areaPolyPos[9]], [0.65, -0.05]]}
                materials={"colMat4"}/></React.Fragment>)
      }
  
    //create the next point
    startPoint[0] = endPoint[0]; //set the next Start Point X to the last End Point X
    startPoint[1] = endPoint[1]; //set the next Start Point Y to the last End Point Y
    endPoint[1] = 0;
    endPoint[0] += 0.3;
  }