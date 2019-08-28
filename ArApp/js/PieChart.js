"use strict";
import React, { Component } from "react";
import { examples} from "./chartExamples";
import {
  ViroPolygon
} from "react-viro";

//---------
//Pie Chart
//---------
export const pieTriangles = []; //ann array to hold the triangles that will create the Pie Chart
var triStartPos = [1, 2] //start position of triangle
var triEndPos = [1, 2] //end position of triangle
var triMiddlePos = [1, 1]; //middle position of triangle (always middle, same for every trianle)
var triDifQ1 = 0.14; //var to create the triangles in the first quadrant of the circle
var triDifYQ1 = 0.05; //var to create the triangles in the first quadrant of the circle
var triDifQ2 = 0.14; //var to create the triangles in the second quadrant of the circle
var triDifYQ2 = 0.05 //var to create the triangles in the second quadrant of the circle
var triDifQ3 = 0.14; //var to create the triangles in the third quadrant of the circle
var triDifYQ3 = 0.05 //var to create the triangles in the third quadrant of the circle
var triDifQ4 = 0.14; //var to create the triangles in the fourth quadrant of the circle
var triDifYQ4 = 0.05 //var to create the triangles in the fourth quadrant of the circle
//array to hold the data from the dataset in order to set different triangles different colous
var pieNum = [examples["Pie series"]["pie"][0]["seriesData"][0]["displayY"],[examples["Pie series"]["pie"][1]["seriesData"][0]["displayY"]]];

//for loop for creating the Pie Chart
for (var i = 0; i < 36; i++)
{

  if (i < 9)
  {                     
    triStartPos[0] = triEndPos[0];
    triStartPos[1] = triEndPos[1];

    switch (i){
      case 0:
        triDifQ1 = 0.2;
        triDifYQ1 = 0.02;
        break;
      case 1:
        triDifQ1 = 0.18;
        triDifYQ1 = 0.05;
        break;
      case 2:
        triDifQ1 = 0.14;
        triDifYQ1 = 0.07;
        break;
      case 3:
        triDifQ1 = 0.12;
        triDifYQ1 = 0.1;
        break;
      case 4:
        triDifQ1 = 0.12;
        triDifYQ1 = 0.13;
        break;
      case 5:
        triDifQ1 = 0.09;
        triDifYQ1 = 0.13;
        break;
      case 6:
        triDifQ1 = 0.08;
        triDifYQ1 = 0.15;
        break;
      case 7:
        triDifQ1 = 0.04;
        triDifYQ1 = 0.16;
        break;
      case 8:
        triDifQ1 = 0.03;
        triDifYQ1 = 0.22;
        break;
      default:
        break
    }
    
    triEndPos[0] += triDifQ1;  
    triEndPos[1] -= triDifYQ1;
  }

    if (i >= 9 && i < 18)
    {                     
      triStartPos[0] = triEndPos[0];
      triStartPos[1] = triEndPos[1];
  
      switch (i){
        case 9:
          triDifQ2 = 0.03;
          triDifYQ2 = 0.22;
          break;
        case 10:
          triDifQ2 = 0.04;
          triDifYQ2 = 0.16;
          break;
        case 11:
          triDifQ2 = 0.08;
          triDifYQ2 = 0.15;
          break;
        case 12:
          triDifQ2 = 0.09;
          triDifYQ2 = 0.13;
          break;
        case 13:
          triDifQ2 = 0.12;
          triDifYQ2 = 0.1;
          break;
        case 14:
          triDifQ2 = 0.12;
          triDifYQ2 = 0.1;
          break;
        case 15:
          triDifQ2 = 0.14;
          triDifYQ2 = 0.07;
          break;
        case 16:
          triDifQ2 = 0.18;
          triDifYQ2 = 0.05;
          break;
        case 17:
          triDifQ2 = 0.2;
          triDifYQ2 = 0.02;
          break;
        default:
          break
      }
      triEndPos[0] -= triDifQ2;  
      triEndPos[1] -= triDifYQ2;
    }

    if (i >= 18 && i < 27)
    {                     
      triStartPos[0] = triEndPos[0];
      triStartPos[1] = triEndPos[1];
  
      switch (i){
        case 18:
          triDifQ3 = 0.2;
          triDifYQ3 = 0.02;
          break;
        case 19:
          triDifQ3 = 0.18;
          triDifYQ3 = 0.05;
          break;
        case 20:
          triDifQ3 = 0.14;
          triDifYQ3 = 0.07;
          break;
        case 21:
          triDifQ3 = 0.12;
          triDifYQ3 = 0.1;
          break;
        case 22:
          triDifQ3 = 0.12;
          triDifYQ3 = 0.13;
          break;
        case 23:
          triDifQ3 = 0.09;
          triDifYQ3 = 0.13;
          break;
        case 24:
          triDifQ3 = 0.08;
          triDifYQ3 = 0.15;
          break;
        case 25:
          triDifQ3 = 0.04;
          triDifYQ3 = 0.16;
          break;
        case 26:
          triDifQ3 = 0.03;
          triDifYQ3 = 0.22;
          break;
        default:
          break
      }
      triEndPos[0] -= triDifQ3;
      triEndPos[1] += triDifYQ3;
    }

    if (i >= 27 && i < 36)
    {                     
      triStartPos[0] = triEndPos[0];
      triStartPos[1] = triEndPos[1];
  
      switch (i){
        case 27:
          triDifQ4 = 0.03;
          triDifYQ4 = 0.22;
          break;
        case 28:
          triDifQ4 = 0.04;
          triDifYQ4 = 0.16;
          break;
        case 29:
          triDifQ4 = 0.08;
          triDifYQ4 = 0.15;
          break;
        case 30:
          triDifQ4 = 0.09;
          triDifYQ4 = 0.13;
          break;
        case 31:
          triDifQ4 = 0.12;
          triDifYQ4 = 0.1;
          break;
        case 32:
          triDifQ4 = 0.12;
          triDifYQ4 = 0.1;
          break;
        case 33:
          triDifQ4 = 0.14;
          triDifYQ4 = 0.07;
          break;
        case 34:
          triDifQ4 = 0.18;
          triDifYQ4 = 0.05;
          break;
        case 35:
          triDifQ4 = 0.2;
          triDifYQ4 = 0.02;
          break;
        default:
          break
      }
      triEndPos[0] += triDifQ4;
      triEndPos[1] += triDifYQ4;
    }

  //if statement that uses the data from the dataset to colour the triangles correctly
  if (pieNum[0] > i)
  {
  pieTriangles.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolygon 
        rotation={[0, 0, 0]}
        position={[-0.5,-1,0]}
        vertices={[[triStartPos[0], triStartPos[1]], [triMiddlePos[0], triMiddlePos[1]], [triEndPos[0],triEndPos[1]]]}
        materials={"colMat"}/></React.Fragment>);
  }
  else
  {
    pieTriangles.push(
      <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
        <ViroPolygon 
          rotation={[0, 0, 0]}
          position={[-0.5,-1,0]}
          vertices={[[triStartPos[0], triStartPos[1]], [triMiddlePos[0], triMiddlePos[1]], [triEndPos[0],triEndPos[1]]]}
          materials={"colMat2"}/></React.Fragment>);  
  }          
}