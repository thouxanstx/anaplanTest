"use strict";
import React, { Component } from "react";
import { StyleSheet, TouchableHighlight} from "react-native";
import { examples } from "./chartExamples";
import {uniqueKeyGenerator} from "./utils"
import {
  ViroImage,
  ViroPolyline,
  ViroText
} from "react-viro";

//Create a Style Sheet for the Font used for Viro Text Objects
var styles = StyleSheet.create({
    labStyle: {
      fontFamily: 'Arial',
      fontSize: 20,
      color: '#000000',
      textAlignVertical: 'center',
      textAlign: 'left',  
    },
  });

//---------
//Variables
//---------
export const labels = []; //array to hold the viro polylines to show label colour and ViroText to show label name
var currentGraph = "Area Multi Series"; //the current graph being rendered
var labelName = []; //array to hold the name of the current label to pass into the labels array
var labelPos = {x: -0.5,y:-1, z: 0}; //X, Y and Z position of the label
var labelPoints = {x: -0.6, y: -0.8, z: 0}; //X, Y and Z position of the label colour key 
var labelNamePos = {x: 4.1, y: -1.86, z: 0}; //X, Y and Z position of the label name
var labelXAddDots = 0; //number to add to the dots x position if there is more than one
var labelXAddNames = 0.5; //number to add to the names x position if there is more than one
var labelYAddDots = 0; //number to add to the dots y position if there is more than one
var labelYAddNames = 0; //number to add to the names x position if there is more than one
export const labelMaterials = ["colMat"] //variable to hold the colour of the label key

/*this.state = {
  currentState = defaultView,
  graphRunning = UNSET
}

function changeGraph(currentGraph) {
  this.currentGraph = currentGraph;
      return currentGraph;
}

if(this.state.graphRunning == UNSET) {
  render() ;{
    return(
      <View >
        <TouchableHighlight
          onPress = {this.changeGraph(currentGraph)}
        >
          <Text> Change Graph </Text>
        </TouchableHighlight>
      </View>
    )
  }
}*/
//------
//Labels
//-----

// export const barSgLabels = () => {
//   const seriesData = examples["Bar single series"]["bar"][0]["label"];

//   return seriesData.map(({ y }, index) => {
//     return (
//       <React.Fragment key = {uniqueKeyGenerator()}> 
//         <ViroPolyline 
//           position={[labelPos[0], labelPos[1], labelPos[2]]} 
//           points={[[labelPoints[0], labelPoints[1], labelPoints[2]]]} 
//           thickness={0.01} 
//           materials={labelMaterials[0]} />
//         <ViroText text = {labelName[0]} width={10} height={100} position={[labelNamePos[0], labelNamePos[1], labelNamePos[2]]} style={styles.labStyle} />
//      </React.Fragment>
//     );
//   });
// }

//creating the Labels for Column, Bar and Area Charts

if (currentGraph == "Column" || "Bar" || "Area")
{
labels.length = 0;
  if (currentGraph == "Column")
  {
    labelName = [];
    labelName.push(examples["Column single series"]["column"][0]["label"])
  }
  if (currentGraph == "Bar")
  {
    labelName = [];
    labelName.push(examples["Bar single series"]["bar"][0]["label"])
  }
  if (currentGraph == "Area")
  {
    labelName = [];
    labelName.push(examples["Area single series"]["area"][0]["label"])
  }

  //for snapshot testing
  if (currentGraph != "Column" || "Bar" || "Area")
  {
    labelName[0] = "Test";
  }

labels.push(
  <React.Fragment key = {uniqueKeyGenerator()}> 
    <ViroPolyline 
      position={[labelPos[0], labelPos[1], labelPos[2]]} 
      points={[[labelPoints[0], labelPoints[1], labelPoints[2]]]} 
      thickness={0.01} 
      materials={labelMaterials[0]} />,

    <ViroText text = {labelName[0]} width={10} height={100} position={[labelNamePos[0], labelNamePos[1], labelNamePos[2]]} style={styles.labStyle} />
  </React.Fragment>
  )
}

//creating Labels for Line Chart
if (currentGraph == "Line")
{
labels.length = 0;
labelName = [];
labelName.push(examples["Line single series"]["line"][0]["label"])
labels.push(
  <React.Fragment key = {uniqueKeyGenerator()}>
    <ViroPolyline 
      position={[labelPos[0], labelPos[1], labelPos[2]]} 
      points={[[labelPoints[0], labelPoints[1], labelPoints[2]], [labelPoints[0] += 0.1, labelPoints[1], labelPoints[2]]]} 
      thickness={0.005} 
      materials={labelMaterials[0]} />
  </React.Fragment>,

  <React.Fragment key = {uniqueKeyGenerator()}>
    <ViroText text = {labelName[0]} width={10} height={100} position={[labelNamePos[0], labelNamePos[1], labelNamePos[2]]} style={styles.labStyle} />
  </React.Fragment>)
}

//creating Labels for Pie Chart
if (currentGraph == "Pie")
{
labels.length = 0;
labelName = [];
labelXAddNames = -0.1;
for (var labi = 0; labi < 2; labi++)
  {
    labelName = examples["Pie series"]["pie"][labi]["label"]
    labels.push(
      <React.Fragment key = {uniqueKeyGenerator()}>
        <ViroPolyline
          position={[labelPos[0], labelPos[1], labelPos[2]]} 
          points={[[labelPoints[0] += labelXAddDots, labelPoints[1], labelPoints[2]]]} 
          thickness={0.005} 
          materials={labelMaterials[0]} />
      </React.Fragment>,
      
      <React.Fragment key = {uniqueKeyGenerator()}>
        <ViroText text = {labelName} width={10} height={100} position={[labelNamePos[0] += labelXAddNames, labelNamePos[1], labelNamePos[2]]} style={styles.labStyle} />
      </React.Fragment>)
    labelXAddDots += 2.3;
    labelXAddNames += 2.4;
    labelMaterials[0] = "colMat2";
  }
}

//creating Labels for Column and Line Multi Series
if (currentGraph == "Column Multi Series" || "Bar Multi Series")
{
labels.length = 0;
labelName = [];
labelNamePos[0] += -0.1;
labelMaterials[0] = "colMat2"

for (var cmsi = 0; cmsi < 3; cmsi++)
  {
    if (currentGraph == "Column Multi Series")
    {
      labelName = [];
      labelName.push(examples["Column multi series"]["column"][cmsi]["label"])
    }

    if (currentGraph == "Bar Multi Series")
    {
      labelName = [];
      labelName.push(examples["Bar multi series"]["bar"][cmsi]["label"])
    }

    if (cmsi == 0)
    {

    //for snapshot testing
    if (currentGraph != "Column Multi Series" || "Bar Multi Series")
    {
      labelName[0] = "Test";
    }

      labels.push(
        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroPolyline 
            position={[labelPos[0], labelPos[1], labelPos[2]]} 
            points={[[labelPoints[0] += labelXAddDots, labelPoints[1] += labelYAddDots, labelPoints[2]]]} 
            thickness={0.005} 
            materials={labelMaterials[0]} />
        </React.Fragment>,

        <React.Fragment key = {uniqueKeyGenerator()}>  
          <ViroText 
            text = {labelName[0]} width={10} height={100} 
            position={[labelNamePos[0], labelNamePos[1] += labelYAddNames, labelNamePos[2]]} 
            style={styles.labStyle} />
        </React.Fragment>)
  
      labelXAddDots += 1.2;
      labelXAddNames += 0.7;
      labelMaterials[0] = "colMat10";
    }

    if (cmsi > 0)
    {
      labels.push(
        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroPolyline 
            position={[labelPos[0], labelPos[1], labelPos[2]]} 
            points={[[labelPoints[0] += labelXAddDots, labelPoints[1] += labelYAddDots, labelPoints[2]]]} 
            thickness={0.005} 
            materials={labelMaterials[0]} />
        </React.Fragment>,

        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroText 
            text = {labelName[0]} width={10} height={100} 
            position={[labelNamePos[0] += labelXAddNames, labelNamePos[1] += labelYAddNames, labelNamePos[2]]} 
            style={styles.labStyle} />
        </React.Fragment>)
    }

    if (cmsi == 1)
    {
      labelXAddDots -= 2.44;
      labelXAddNames -= 2.43;
      labelYAddDots += -0.3;
      labelYAddNames += -0.3;
      labelMaterials[0] = "colMat4";
    }
  }
}

//create labels for Column Multi series single value
if (currentGraph == "Column Multi Series Single Value")
{
    labels.length = 0;
    labelName = [];
    labelNamePos[0] = 4;
  for (var cmsii = 0; cmsii < 19; cmsii++)
    {
      labelName = [];
      labelName.push(examples["Column multi series single value"]["column"][cmsii]["label"])

      //set colours of the bars
      if (cmsii == 0 || cmsii == 9 || cmsii == 18)
      labelMaterials[0] = "colMat2"
      if (cmsii == 1 || cmsii == 10)
      labelMaterials[0] = "colMat"
      if (cmsii == 2 || cmsii == 11)
      labelMaterials[0] = "colMat4"
      if (cmsii == 3 || cmsii == 12)
      labelMaterials[0] = "colMat6"
      if (cmsii == 4 || cmsii == 13)
      labelMaterials[0] = "colMat5"
      if (cmsii == 5 || cmsii == 14)
      labelMaterials[0] = "colMat3"
      if (cmsii == 6 || cmsii == 15)
      labelMaterials[0] = "colMat8"
      if (cmsii == 7 || cmsii == 16)
      labelMaterials[0] = "colMat9"
      if (cmsii == 8 || cmsii == 17)
      labelMaterials[0] = "colMat10"

      labels.push(
        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroPolyline 
            position={[labelPos[0], labelPos[1], labelPos[2]]} 
            points={[[labelPoints[0], labelPoints[1] + labelYAddDots, labelPoints[2]]]} 
            thickness={0.005} 
            materials={labelMaterials[0]} />
        </React.Fragment>,
        
        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroText 
            text = {labelName[0]} width={10} height={100} 
            position={[labelNamePos[0], labelNamePos[1] += labelYAddNames, labelNamePos[2]]} 
            style={styles.labStyle} />
        </React.Fragment>,
        
        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroImage
            position={[0.4, labelPos[1] += labelYAddNames, -0.11 ]}
            height={2.5}
            width={5}
            placeholderSource={require("./res/white.jpg")}
            source={{ uri: "https://my_s3_image.jpg" }}                    
            />
        </React.Fragment>)
  
        labelYAddDots = -0.3;
        labelYAddNames = -0.3;
        labelMaterials[0] = "colMat3";
  }
}

//Create Labels for Line Multi Series
if (currentGraph == "Line Multi Series")
{
  labels.length = 0;
  labelName = [];
  labelNamePos[0] += -0.1;
  labelMaterials[0] = "colMat2"
  
  for (var z = 0; z < 3; z++)
    {

        labelName = [];
        labelName.push(examples["Column multi series"]["column"][z]["label"])

      if (z == 0)
      {
        labels.push(
          <React.Fragment key = {uniqueKeyGenerator()}>
            <ViroPolyline 
              position={[labelPos[0], labelPos[1], labelPos[2]]} 
              points={[[labelPoints[0], labelPoints[1], labelPoints[2]], [labelPoints[0] += 0.1, labelPoints[1], labelPoints[2]]]} 
              thickness={0.005} 
              materials={labelMaterials[0]} />
          </React.Fragment>,

          <React.Fragment key = {uniqueKeyGenerator()}>
            <ViroText 
              text = {labelName[0]} width={10} height={100} 
              position={[labelNamePos[0]+= 0.2, labelNamePos[1] , labelNamePos[2]]} 
              style={styles.labStyle} />
          </React.Fragment>)
    
        labelXAddDots += 2.5;
        labelXAddNames += 2.6;
        labelYAddDots = 0;
        labelYAddNames = 0;
        labelMaterials[0] = "colMat10";
      }
  
      if (z > 0)
      {
        labels.push(
          <React.Fragment key = {uniqueKeyGenerator()}>
            <ViroPolyline 
              position={[labelPos[0], labelPos[1], labelPos[2]]} 
              points={[[labelPoints[0] += labelXAddDots, labelPoints[1] += labelYAddDots, labelPoints[2]], [labelPoints[0] += 0.1, labelPoints[1], labelPoints[2]]]} 
              thickness={0.005} 
              materials={labelMaterials[0]} />
          </React.Fragment>,

          <React.Fragment key = {uniqueKeyGenerator()}>   
            <ViroText 
              text = {labelName[0]} width={10} height={100} 
              position={[labelNamePos[0] += labelXAddNames, labelNamePos[1] += labelYAddNames , labelNamePos[2]]} 
              style={styles.labStyle} />
          </React.Fragment>)
      }
  
      if (z == 1)
      {
        labelXAddDots -= 2.73;
        labelXAddNames -= 2.73;
        labelYAddDots += -0.3;
        labelYAddNames += -0.3;
        labelMaterials[0] = "colMat4";
      }
    }
}

//create labels for Area multi Series
if (currentGraph == "Area Multi Series")
{
labels.length = 0;
labelName = [];
labelMaterials[0] = "colMat2"
labelXAddDots = 0.1;
labelYAddDots = 0.3;
labelXAddNames = 0.1;
labelYAddNames = 0.3;

for (var areaii = 0; areaii < 3; areaii++)
  {

      labelName = [];
      labelName.push(examples["Area multi series"]["area"][areaii]["label"])

    if (areaii == 0)
    {
      labels.push(
        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroPolyline 
            position={[labelPos[0], labelPos[1], labelPos[2]]} 
            points={[[labelPoints[0] += labelXAddDots, labelPoints[1] += labelYAddDots, labelPoints[2]]]} 
            thickness={0.005} 
            materials={labelMaterials[0]} />
        </React.Fragment>,

        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroText 
            text = {labelName[0]} width={10} height={100} 
            position={[labelNamePos[0] += labelXAddNames, labelNamePos[1] += labelYAddNames, labelNamePos[2]]} 
            style={styles.labStyle} />
        </React.Fragment>)
  
      labelXAddDots += 1;
      labelYAddDots = 0;
      labelXAddNames += 1;
      labelYAddNames = 0;
      labelMaterials[0] = "colMat10";
    }

    if (areaii > 0)
    {
      labels.push(
        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroPolyline 
            position={[labelPos[0], labelPos[1], labelPos[2]]} 
            points={[[labelPoints[0] += labelXAddDots, labelPoints[1] += labelYAddDots, labelPoints[2]]]} 
            thickness={0.005} 
            materials={labelMaterials[0]} />
        </React.Fragment>,

        <React.Fragment key = {uniqueKeyGenerator()}>    
          <ViroText 
            text = {labelName[0]} width={10} height={100} 
            position={[labelNamePos[0] += labelXAddNames, labelNamePos[1] += labelYAddNames, labelNamePos[2]]} 
            style={styles.labStyle} />
        </React.Fragment>)  
    }

    if (areaii == 1)
    {
      labelXAddDots += -0.1;
      labelXAddNames += -0.1;
      labelYAddDots = 0;
      labelYAddNames = 0;
      labelMaterials[0] = "colMat4";
    }
  }
}