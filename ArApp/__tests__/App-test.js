/**
 * @format
 */

import 'react-native';
import 'react-viro';
import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';
import renderer from 'react-test-renderer';
import {ViroText, ViroPolyline} from 'react-viro';
import { BarSingleSeries, bars } from '../js/BarSingleSeries';
import { areaLine, areaPoly } from '../js/AreaSingleSeries';
import { barsMulti } from '../js/BarMultiSeries';
import { areaMulLine, areaMulPoly } from '../js/AreaMultiSeries';
import { line } from '../js/LineSingleSeries';
import { lineMulti } from '../js/LineMultiSeries';
import { columns } from '../js/ColumnSingleSeries';
import { colMulti } from '../js/ColumnMultiSeries';
import { colMulSingle } from '../js/ColumnMultiSeriesSingleValue';
import { pieTriangles } from '../js/PieChart';
import { labels } from '../js/Labels';
// // Note: test renderer must be required after react-native.

it('renders correctly react text', () => {
  const tree = renderer.create(
    <Text text = 'whatever' />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly viro text', () => {
  const tree = renderer.create(
    <ViroText text = "whatever" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly viro line', () => {
  const tree = renderer.create(
    <ViroPolyline position={[0,0,-2]} points={[[0,0,0], [.5,.5,.5], [1,0,0]]} thickness={0.2} materials={"red"} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly single bars', () => {
  const tree = renderer.create(
    [bars]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly area line', () => {
  const tree = renderer.create(
    [areaLine]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly area polygon', () => {
  const tree = renderer.create(
    [areaPoly]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly multi bars', () => {
  const tree = renderer.create(
    [barsMulti]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly multi area line', () => {
  const tree = renderer.create(
    [areaMulLine]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly multi area polygon', () => {
  const tree = renderer.create(
    [areaMulPoly]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly single line', () => {
  const tree = renderer.create(
    [line]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly multi line', () => {
  const tree = renderer.create(
    [lineMulti]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly single column', () => {
  const tree = renderer.create(
    [columns]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly multi column', () => {
  const tree = renderer.create(
    [colMulti]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly multi column single value', () => {
  const tree = renderer.create(
    [colMulSingle]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly pie', () => {
  const tree = renderer.create(
    [pieTriangles]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly labels', () => {
  const tree = renderer.create(
    [labels]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('generates unique key', () => {
  const tree = {
    key : Math.random().toString(36).substr(2, 9)
  };
  expect(tree).toMatchSnapshot({
    key : expect.any(String)
  });
});

it('renders correct material bar single', () => {
  const tree = {
    materials : ["colMat2"]
  };
  expect(tree).toMatchSnapshot({
    materials : expect.anything(bars.materials)
  });
});

it('renders correct material bar multi', () => {
  const tree = {
    materials : ["colMat2", "colMat4", "colMat10"]
  };
  expect(tree).toMatchSnapshot({
    materials : expect.anything(bars.materials)
  });
});

it('renders correct material line single', () => {
  const tree = {
    materials : ["colMat2"]
  };
  expect(tree).toMatchSnapshot({
    materials : expect.anything(line.materials)
  });
});

it('renders correct material line multi', () => {
  const tree = {
    materials : ["colMat2", "colMat4", "colMat10"]
  };
  expect(tree).toMatchSnapshot({
    materials : expect.anything(line.materials)
  });
});
