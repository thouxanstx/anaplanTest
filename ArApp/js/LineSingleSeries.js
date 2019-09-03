"use strict";
import React, { Component } from "react";
import { examples} from "./chartExamples";
import { uniqueKeyGenerator } from "./utils";
import { ViroPolyline, ViroText } from "react-viro";
import { StyleSheet } from 'react-native';


//----------
//Line Chart
//----------
var scaler = 2150000; //variable to down scale the data to an accurate world co-ordinate
var startPoint = {x: -0.3,y: 0, z: 0}; //start X, Y and Z for the Lines in the Line Chart
var endPoint = {x: -0.3, y: 0, z: 0}; //end X, Y and Z for the Lines in the Line Chart
var labelPos = {x: -0.5,y:-1, z: 0}; //X, Y and Z position of the label
var labelPoints = {x: -0.6, y: -0.8, z: 0}; //X, Y and Z position of the label colour key 
var labelNamePos = {x: 4.1, y: -1.86, z: 0}; 
var barShiftX = .3;
var styles = StyleSheet.create({
  labStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'left',  
  },
});
export const lineMaterials = ['colMat2'];
export const labelMaterials = ["colMat"];

export const line = (lineSingleSeries) => {

  return lineSingleSeries.line[0].seriesData.map(({ y }, index) => {
    const position = y / scaler;
    const endPointY = (position < 0 ) ? position + 0.3 : position;
    endPoint.y = lineSingleSeries.line[0].seriesData[0];
    const { label } = lineSingleSeries.line[0];

    return(
      <React.Fragment key = {uniqueKeyGenerator()}>
        { (index == lineSingleSeries.line[0].seriesData.length - 1)
          ? <React.Fragment key = {uniqueKeyGenerator()}>
              <ViroPolyline
                position={[-0.2, -1, 0]}
                points={[[endPoint.x - (index * barShiftX), endPointY, endPoint.z],[endPoint.x - (index * barShiftX), endPointY, endPoint.z]]}
                thickness={0.02}
                materials={lineMaterials[0]}/>
              <ViroPolyline 
                position={[labelPos.x, labelPos.y, labelPos.z]} 
                points={[[labelPoints.x, labelPoints.y, labelPoints.z], [labelPoints.x += 0.1, labelPoints.y, labelPoints.z]]} 
                thickness={0.005} 
                materials={labelMaterials[0]} />
              <ViroText text = {label} width={10} height={100} position={[labelNamePos.x, labelNamePos.y, labelNamePos.z]} style={styles.labStyle} />
            </React.Fragment>
          : <React.Fragment key = {uniqueKeyGenerator()}>
              <ViroPolyline
                position={[-0.2, -1, 0]}
                points={[[startPoint.x - (index * barShiftX), startPoint.y, startPoint.z],[startPoint.x - (index * barShiftX), startPoint.y, startPoint.z]]}
                thickness={0.01}
                materials={lineMaterials[0]}/>
              <ViroPolyline
                position={[-0.2, -1, 0]}
                points={[[endPoint.x - (index * barShiftX), endPointY, endPoint.z],[endPoint.x - (index * barShiftX), endPointY, endPoint.z]]}
                thickness={0.01}
                materials={lineMaterials[0]}/>
            </React.Fragment>
        }
      </React.Fragment>
    );
    // if (index != lineSingleSeries.line[0].seriesData.length - 1){
    //   return (
    //     <React.Fragment key = {uniqueKeyGenerator()}>
    //       <ViroPolyline
    //         position={[-0.2, -1, 0]}
    //         points={[[startPoint.x - (index * barShiftX), startPoint.y, startPoint.z],[startPoint.x - (index * barShiftX), startPoint.y, startPoint.z]]}
    //         thickness={0.01}
    //         materials={lineMaterials[0]}/>
    //       <ViroPolyline
    //         position={[-0.2, -1, 0]}
    //         points={[[endPoint.x - (index * barShiftX), endPointY, endPoint.z],[endPoint.x - (index * barShiftX), endPointY, endPoint.z]]}
    //         thickness={0.01}
    //         materials={lineMaterials[0]}/>
    //     </React.Fragment>
    //   );
    // }else{
    //   return (
    //     <React.Fragment key = {uniqueKeyGenerator()}>
    //       <ViroPolyline
    //         position={[-0.2, -1, 0]}
    //         points={[[endPoint.x - (index * barShiftX), endPointY, endPoint.z],[endPoint.x - (index * barShiftX), endPointY, endPoint.z]]}
    //         thickness={0.02}
    //         materials={lineMaterials[0]}/>
    //       <ViroPolyline 
    //         position={[labelPos.x, labelPos.y, labelPos.z]} 
    //         points={[[labelPoints.x, labelPoints.y, labelPoints.z], [labelPoints.x += 0.1, labelPoints.y, labelPoints.z]]} 
    //         thickness={0.005} 
    //         materials={labelMaterials[0]} />
    //       <ViroText text = {label} width={10} height={100} position={[labelNamePos.x, labelNamePos.y, labelNamePos.z]} style={styles.labStyle} />
    //     </React.Fragment>
    //     );
    // }

    // {(index != lineSingleSeries.line[0].seriesData.length - 1)
    //   ? <React.Fragment key = {uniqueKeyGenerator()}>
    //          <ViroPolyline
    //            position={[-0.2, -1, 0]}
    //            points={[[startPoint.x - (index * barShiftX), startPoint.y, startPoint.z],[startPoint.x - (index * barShiftX), startPoint.y, startPoint.z]]}
    //            thickness={0.01}
    //            materials={lineMaterials[0]}/>
    //          <ViroPolyline
    //            position={[-0.2, -1, 0]}
    //            points={[[endPoint.x - (index * barShiftX), endPointY, endPoint.z],[endPoint.x - (index * barShiftX), endPointY, endPoint.z]]}
    //            thickness={0.01}
    //            materials={lineMaterials[0]}/>
    //        </React.Fragment>
    //   : <React.Fragment key = {uniqueKeyGenerator()}>
    //          <ViroPolyline
    //            position={[-0.2, -1, 0]}
    //            points={[[endPoint.x - (index * barShiftX), endPointY, endPoint.z],[endPoint.x - (index * barShiftX), endPointY, endPoint.z]]}
    //            thickness={0.02}
    //            materials={lineMaterials[0]}/>
    //          <ViroPolyline 
    //            position={[labelPos.x, labelPos.y, labelPos.z]} 
    //            points={[[labelPoints.x, labelPoints.y, labelPoints.z], [labelPoints.x += 0.1, labelPoints.y, labelPoints.z]]} 
    //            thickness={0.005} 
    //            materials={labelMaterials[0]} />
    //          <ViroText text = {label} width={10} height={100} position={[labelNamePos.x, labelNamePos.y, labelNamePos.z]} style={styles.labStyle} />
    //        </React.Fragment>
    // }
 
  });
}