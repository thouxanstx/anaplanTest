"use strict";
import React, { Component } from "react";
import { examples } from "./chartExamples";
import {uniqueKeyGenerator} from "./utils"
import { ViroPolyline, ViroPolygon, ViroText } from "react-viro";
import { StyleSheet } from 'react-native';

//----------
//Area Chart
//----------
var scaler = 2150000; //variable to down scale the data to an accurate world co-ordinat
var areaY; //variable to hold the Y positions of Line in the Area Chart
//export const areaLine = []; //array to hold the Area Line Polylines
var startPoint = {x: -0.3, z: 0}; //start X, Y and Z for the Lines in the Area Chart
var endPoint = {x: -0.3, y: 0, z: 0}; //end X, Y and Z for the Area Lines in the Line Chart
var labelPos = {x: -0.5,y:-1, z: 0}; //X, Y and Z position of the label
var labelPoints = {x: -0.6, y: -0.8, z: 0}; //X, Y and Z position of the label colour key 
var labelNamePos = {x: 4.1, y: -1.86, z: 0};
var areaPolyPos =[];
export const areaPoly = []; //array to hold the Polygon that will reprsent the Area on the Area Chart
; //array to hold the positions for the polygon
export const areaMaterials = ["colMat2"];
export const labelMaterials = ["colMat"];
const areaShiftY = .3;
var styles = StyleSheet.create({
  labStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'left',  
  },
});
export const areaLine = (areaSingleSeries) => {
  //const seriesData = examples["Area single series"]["area"][0]["seriesData"];

  return areaSingleSeries.area[0].seriesData.map(({ y }, index) => {
    const position = y / scaler;
    const endPointY = (position < 0 ) ? position + 0.3 : position;
    const { label } = areaSingleSeries.area[0];
    

    if(index < areaSingleSeries.area[0].seriesData.length - 1) {
      return (
        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroPolyline
            position={[-0.2, -1, 0]}
            points={[
              [startPoint.x, startPoint.y - (index * areaShiftY), startPoint.z],
              [endPoint.x, endPointY - (index * areaShiftY), endPoint.z]]}
            thickness={0.01}
            materials={areaMaterials[0]}/>
      </React.Fragment>
      );
    }
    if ( index <= areaSingleSeries.area[0].seriesData.length - 1){
      areaPolyPos.push(startPoint.x, startPoint.y);
    }
    if ( index == areaSingleSeries.area[0].seriesData.length - 1) {
      areaPolyPos.push(endPoint.x, endPoint.y);
      return (
        <React.Fragment key = {uniqueKeyGenerator()}>
          <ViroPolyline
            position={[-0.2, -1, 0]}
            thickness={0.02}
            materials={areaMaterials[0]}
            points={[
              [startPoint.x, startPoint.y - (index * areaShiftY), startPoint.z],
              [endPoint.x, endPointY - (index * areaShiftY), endPoint.z]]}/>
          <ViroPolyline 
            position={[labelPos.x, labelPos.y, labelPos.z]} 
            points={[[labelPoints.x, labelPoints.y, labelPoints.z]]} 
            thickness={0.01} 
            materials={labelMaterials[0]} />,
          <ViroText text = {label} width={10} height={100} position={[labelNamePos.x, labelNamePos.y, labelNamePos.z]} style={styles.labStyle} />,
          <ViroPolygon rotation={[0, 0, 0]}
            position={[-0.2,-1,0]}
            opacity ={0.7}
            vertices={[[-0.3,-.95], [areaPolyPos[0],areaPolyPos[1]], [areaPolyPos[2],areaPolyPos[3]], [areaPolyPos[4],areaPolyPos[5]], [areaPolyPos[6],areaPolyPos[7]],
                        [areaPolyPos[8],areaPolyPos[9]], [areaPolyPos[10],areaPolyPos[11]], [areaPolyPos[12],areaPolyPos[13]], [areaPolyPos[14],areaPolyPos[15]], 
                        [areaPolyPos[16],areaPolyPos[17]], [1.8, -0.05]]}
            materials={areaMaterials[0]}
          />
      </React.Fragment>
      );
    }
  });
}


//For Loop for creating Area graph
// for (var i = 0; i < 8; i++) {
//   areaY = examples["Area single series"]["area"][0]["seriesData"][i]["y"] //set the areaY var to the data in chartExamples dataset
//   areaY = areaY /scaler //divide it by a number to get a position in world space
//   endPoint[1] = areaY //set area Line End point to the value held in areaY

//   //Add the Line to the Line Array with the variables set
//   areaLine.push(
//     <React.Fragment key = {uniqueKeyGenerator()}>
//       <ViroPolyline
//         position={[-0.2, -1, 0]}
//         points={[
//           [startPoint[0], startPoint[1], startPoint[2]],
//           [endPoint[0], endPoint[1], endPoint[2]]
//         ]}
//         thickness={0.01}
//         materials={"colMat2"}
//     />
//     </React.Fragment>
//   );

//   //Add the start point co-ordinates to the array that hold the positions for the polygon
//   if (i <= 7)
//   {
//   areaPolyPos.push(startPoint[0], startPoint[1]);
//   }
  
//   //Create the dots
//   areaLine.push(
//     <React.Fragment key = {uniqueKeyGenerator()}>
//       <ViroPolyline
//         position={[-0.2, -1, 0]}
//         points={[
//           [startPoint[0], startPoint[1], startPoint[2]],
//           [startPoint[0], startPoint[1], startPoint[2]]
//         ]}
//         thickness={0.02}
//         materials={"colMat2"}
//       />
//     </React.Fragment>
//   );

//   //Create the last dot
//   if (i == 7)
//   {
//     areaLine.push(
//       <React.Fragment key = {uniqueKeyGenerator()}>
//         <ViroPolyline
//             position={[-0.2, -1, 0]}
//             thickness={0.02}
//             materials={"colMat2"}
//             points={[
//             [endPoint[0], endPoint[1], endPoint[2]],
//             [endPoint[0], endPoint[1], endPoint[2]]]}
//         />
//       </React.Fragment>
//     );

//       areaPolyPos.push(endPoint[0], endPoint[1]); //add the final end point co-ordinates to the polygon position array

//       //Create the Polygon used to represent the area in the Area Chart using the co-ordinates stored in the areaPolyPos array
//       areaPoly.push(
//         <React.Fragment key = {uniqueKeyGenerator()}>
//           <ViroPolygon rotation={[0, 0, 0]}
//               position={[-0.2,-1,0]}
//               opacity ={0.7}
//               vertices={[[-0.3,0-0.05], [areaPolyPos[0],areaPolyPos[1]], [areaPolyPos[2],areaPolyPos[3]], [areaPolyPos[4],areaPolyPos[5]], [areaPolyPos[6],areaPolyPos[7]],
//                           [areaPolyPos[8],areaPolyPos[9]], [areaPolyPos[10],areaPolyPos[11]], [areaPolyPos[12],areaPolyPos[13]], [areaPolyPos[14],areaPolyPos[15]], 
//                           [areaPolyPos[16],areaPolyPos[17]], [1.8, -0.05]]}
//               materials={"colMat2"}/>
//           </React.Fragment>)
//     }

//   //create the next point
//   startPoint[0] = endPoint[0]; //set the next Start Point X to the last End Point X
//   startPoint[1] = endPoint[1]; //set the next Start Point Y to the last End Point Y
//   endPoint[1] = 0;
//   endPoint[0] += 0.3;
//}