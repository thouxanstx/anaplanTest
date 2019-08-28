"use strict";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { examples, chartColors } from "./chartExamples";
import {
  ViroPolyline,
  ViroText,
  ViroMaterials
} from "react-viro";

//Create a Style Sheet for the Font used for Viro Text Objects
var styles = StyleSheet.create({
  axisStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'left',  
  },
});

var styleCenter = StyleSheet.create({
  axisStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

//-------------------------------------------------------------------
//Axes Single Series Names (for everything except Pie and Bar Charts)
//-------------------------------------------------------------------

//String Array to hold the Names of the x Axes
var xAxesStrings = [examples["Column single series"]["column"][0]["seriesData"][0]["x"], examples["Column single series"]["column"][0]["seriesData"][7]["x"]] 
export const xAxesNames = []; //array to hold the viro texts for the x Axes names
var xAxesPos = [4.2, -1.4, 0]; //X, Y and Z position of the x Axes names

//String Array to hold the names of the y Axes
var yAxesStrings = ["0", "1M", "2M", "3M", "4M"];
export const yAxesNames = []; //array to hold the viro texts for the y Axes
var yAxesPos = [4, -1.1, 0]; //X, Y and Z position of the y Axes names

//For loop for creating X Axes names
for(var j = 0;j < 2; j++)
{
  //Add the X Axes name to the X Axes Name Array with the variables set
  xAxesNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {xAxesStrings[j]} width={10} height={100} position={[xAxesPos[0], xAxesPos[1], xAxesPos[2]]} style={styles.axisStyle}/>
    </React.Fragment>)
  xAxesPos[0] += 2 //changes the position of the text
}

//For loop for creating Y Axes names
for(var k = 0;k < 5; k++)
{
  //Add the Y Axes name to the Y Axes Name Array with the variables set
  yAxesNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {yAxesStrings[k]} width={10} height={100} position={[yAxesPos[0], yAxesPos[1], yAxesPos[2]]} style={styles.axisStyle} />
    </React.Fragment>)
  yAxesPos[1] += .5 //changes the position of the text
}

//-------------------------------------------------------
//Axes Multi Series Names (Column and Line Multi Series)
//-------------------------------------------------------
var yLeftStrings = ["0", "200M", "400M", "600M", "800M"]; //String Array to hold the names of the left side y Axes for Column and Line Multi Series
var yRightStrings = ["0", "1.1M", "2.2M", "3.3M", "4.3M"]; //String Array to hold the names of the right side y Axes for Column and Line Multi Series
export const yAxesMulNames = []; //array to hold the viro texts for the y axes for Column and Line Multi Series
var yAxesMulPosLeft = [3.8, -1.1, 0]; //X, Y and Z position of the y Axes names
var yAxesMulPosRight = [6.8, -1.1, 0]; //X, Y and Z position of the y Axes names

//For loop for creating Y Axes names for Column and Line Multi Series
for(var ki = 0;ki < 5; ki++)
{
  //Add the Y Axes name to the Y Axes Name Array with the variables set
  yAxesMulNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {yLeftStrings[ki]} width={10} height={100} position={[yAxesMulPosLeft[0], yAxesMulPosLeft[1], yAxesMulPosLeft[2]]} style={styles.axisStyle} />
    </React.Fragment>)
  yAxesMulNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {yRightStrings[ki]} width={10} height={100} position={[yAxesMulPosRight[0], yAxesMulPosRight[1], yAxesMulPosRight[2]]} style={styles.axisStyle} />
    </React.Fragment>)
  yAxesMulPosLeft[1] += .5 //changes the position of the text
  yAxesMulPosRight[1] += .5 //changes the position of the text
}

//-------------------------------------------
//Axes Column multi Series Single value names
//-------------------------------------------
var xMulSingle = examples["Column multi series single value"]["column"][0]["seriesData"][0]["x"];//String Array to hold the Names of the x Axes for Column Multi Series single value 
export const xMulSingleNames = []; //array to hold the viro texts for the x Axes names for Column Multi Series single value 
var xAxesSingleNamesPos = [5.3, -1.4, 0]; //X, Y and Z position of the x Axes names for Column Multi Series single value 
var yMulSingle = ["-200M", "0", "200M", "400M", "600M"]; //String Array to hold the names of the y Axes for Column Multi Series single value 
export const yMulSingleNames = []; //array to hold the viro texts for the y Axes names for Column Multi Series single value 
var yAxesSingleNamesPos = [3.8, -1.1, 0]; //X, Y and Z position of the y Axes names for Column Multi Series single value 

//create the X Axis for Column multi series single value
xMulSingleNames.push(
  <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
    <ViroText text = {xMulSingle} width={10} height={100} position={[xAxesSingleNamesPos[0], xAxesSingleNamesPos[1], xAxesSingleNamesPos[2]]} style={styles.axisStyle} />
  </React.Fragment>)

//For loop for creating Y Axes names for Column multi series single value
for(var kiii = 0; kiii < 5; kiii++)
{
  //Add the Y Axes name to the Y Axes Name Array with the variables set
  yMulSingleNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {yMulSingle[kiii]} width={10} height={100} position={[yAxesSingleNamesPos[0], yAxesSingleNamesPos[1], yAxesSingleNamesPos[2]]} style={styles.axisStyle} />
    </React.Fragment>)
  yAxesSingleNamesPos[1] += .5 //changes the position of the text
}

//--------------------------
//Axes Names (for Bar Chart)
//--------------------------

var xAxesBarStrings = ["-4M", "-2M", "0", "2M", "4M"] //String array to hold the name of the x Axes in a Bar Chart
export const xAxesBarNames = [] //array to hold the viro texts for the x Axes names for a Bar Chart
var xAxesBarPos = [4.55, 1.25, 0] //X, Y and Z position of the x Axes names for a Bar Chart
var xAxesBarLines = [] //array to hold the semi transparent vertical lines for the Bar chart

var yAxesBarStrings = [] //String Array to hold the Names of the x Axes in a Bar Chart

//for loop for adding the names of the Axes into the Array from the dataset
for (var bar = 0; bar < 8; bar++)
{
  yAxesBarStrings.push(examples["Bar single series"]["bar"][0]["seriesData"][bar]["x"])

}
export const yAxesBarNames = []; //array to hold the viro texts for the y Axes names for a Bar Chart
var yAxesBarPos = [3, 1.1, 0] //X, Y and Z position of the y Axes names for a Bar Chart


//for loop for creating the Y Axes Names for the Bar chart (as it's different to other charts)
for(var bari = 0; bari < 8; bari++)
{
  yAxesBarNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {yAxesBarStrings[bari]} width={10} height={100} position={[yAxesBarPos[0], yAxesBarPos[1], yAxesBarPos[2]]} style={styles.axisStyle} />
    </React.Fragment>)
  yAxesBarPos[1] -= .31 //changes the position of the text
}

//For loop for creating x Axes names for the Bar Chart
for(var barii = 0;barii < 5; barii++)
{
  //Add the Y Axes name to the Y Axes Name Array with the variables set
  xAxesBarNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {xAxesBarStrings[barii]} width={10} height={100} position={[xAxesBarPos[0], xAxesBarPos[1], xAxesBarPos[2]]} style={styles.axisStyle} />
    </React.Fragment>)
  xAxesBarLines.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroPolyline position={[0, 0, 0]} 
        points={[[xAxesBarPos[0], xAxesBarPos[1], xAxesBarPos[2] - 0.1], [xAxesBarPos[0], xAxesBarPos[1] - 2.3 , xAxesBarPos[2] - 0.1]]} 
        thickness={0.001} 
        opacity ={0.7}
        materials={"colMat8"} />
    </React.Fragment>)
  xAxesBarPos[0] += .5 //changes the position of the text
}

//---------------------------
//Axes Bar Multi Series Names
//---------------------------
var xtopStrings = ["-5.4M", "-2.7M", "0", "2.7M", "5.4M"]; //String Array to hold the names of the left side y Axes for Column and Line Multi Series
var xBottomStrings = ["-1B", "-500M", "0", "500M", "1b"]; //String Array to hold the names of the right side y Axes for Column and Line Multi Series
export const xAxesBarMulNames = []; //array to hold the viro texts for the x axes for Bar multi series
var xAxesBarMulPosTop = [-0.5, 1.25, 0]; //X, Y and Z position of the y Axes names
var xAxesBarPosBottom = [-0.5, -1.5, 0]; //X, Y and Z position of the y Axes names

//For loop for creating Y Axes names for Column and Line Multi Series
for(var barmul = 0; barmul < 5; barmul++)
{
  //Add the Y Axes name to the Y Axes Name Array with the variables set
  xAxesBarMulNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {xtopStrings[barmul]} width={10} height={100} position={[xAxesBarMulPosTop[0], xAxesBarMulPosTop[1], xAxesBarMulPosTop[2]]} style={styleCenter.axisStyle} />
    </React.Fragment>)
  xAxesBarMulNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {xBottomStrings[barmul]} width={10} height={100} position={[xAxesBarPosBottom[0], xAxesBarPosBottom[1], xAxesBarPosBottom[2]]} style={styleCenter.axisStyle} />
    </React.Fragment>)
  xAxesBarMulPosTop[0] += .6 //changes the position of the text
  xAxesBarPosBottom[0] += .6 //changes the position of the text
}

//----------------------------
//Axes Area Mutli Series names
//----------------------------

//String Array to hold the Names of the x Axes for the line multi series
var xAreaMulStrings = [examples["Area multi series"]["area"][0]["seriesData"][0]["x"], examples["Area multi series"]["area"][0]["seriesData"][11]["x"]] 
export const xAxesAreaMulNames = []; //array to hold the viro texts for the x Axes names
var xAxesAreaMulPos = [4.2, -1.4, 0]; //X, Y and Z position of the x Axes names

//String Array to hold the names of the y Axes
var yAxesAreaMulStrings = ["0", "2M", "4M", "6M", "8M", "10M"];
export const yAxesAreaMulNames = []; //array to hold the viro texts for the y Axes
var yAxesAreaMulPos = [4, -1.1, 0]; //X, Y and Z position of the y Axes names

//For loop for creating X Axes names
for(var jj = 0;jj < 2; jj++)
{
  //Add the X Axes name to the X Axes Name Array with the variables set
  xAxesAreaMulNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {xAreaMulStrings[jj]} width={10} height={100} position={[xAxesAreaMulPos[0], xAxesAreaMulPos[1], xAxesAreaMulPos[2]]} style={styles.axisStyle} />
    </React.Fragment>)
  xAxesAreaMulPos[0] += 2 //changes the position of the text
}

//For loop for creating Y Axes names
for(var jjj = 0; jjj < 6; jjj++)
{
  //Add the Y Axes name to the Y Axes Name Array with the variables set
  yAxesAreaMulNames.push(
    <React.Fragment key = {'_' + Math.random().toString(36).substr(2, 9)}>
      <ViroText text = {yAxesAreaMulStrings[jjj]} width={10} height={100} position={[yAxesAreaMulPos[0], yAxesAreaMulPos[1], yAxesAreaMulPos[2]]} style={styles.axisStyle} />
    </React.Fragment>)
  yAxesAreaMulPos[1] += .4 //changes the position of the text
}
