/**
 * @format
 */

import 'react-native';
import 'react-viro';
import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';
import renderer from 'react-test-renderer';
import { bars, barsMaterials } from '../js/BarSingleSeries';
import { areaLine, areaPoly, areaMaterials } from '../js/AreaSingleSeries';
import { barsMulti, barsMultiMaterials } from '../js/BarMultiSeries';
import { areaMulLine, areaMulPoly } from '../js/AreaMultiSeries';
import { line, lineMaterials } from '../js/LineSingleSeries';
import { lineMulti, lineMultiMaterials } from '../js/LineMultiSeries';
import { columns, columnMaterials } from '../js/ColumnSingleSeries';
import { colMulti } from '../js/ColumnMultiSeries';
import { colMulSingle } from '../js/ColumnMultiSeriesSingleValue';
import { pieTriangles } from '../js/PieChart';
import { labels } from '../js/Labels';
import {uniqueKeyGenerator} from "../js/utils";
import barSingleSeries from "../data/BarSingleSeries.json";
import lineSingleSeries from "../data/LineSingleSeries.json";
import areaSingleSeries from "../data/AreaSingleSeries.json";
import columnSingleSeries from "../data/ColumnSingleSeries.json";
// // Note: test renderer must be required after react-native.

it('renders correctly single bars', () => {
  const tree = renderer.create(
    [bars(barSingleSeries)]
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly area line', () => {
  const tree = renderer.create(
    [areaLine(areaSingleSeries)]
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
    [line(lineSingleSeries)]
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
    [columns(columnSingleSeries)]
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
    key : uniqueKeyGenerator()
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
    materials : expect.anything(barsMaterials)
  });
});

it('renders correct material bar multi', () => {
  const tree = {
    materials : ["colMat2", "colMat4", "colMat10"]
  };
  expect(tree).toMatchSnapshot({
    materials : expect.anything(barsMultiMaterials)
  });
});

it('renders correct material line single', () => {
  const tree = {
    materials : ["colMat2"]
  };
  expect(tree).toMatchSnapshot({
    materials : expect.anything(lineMaterials)
  });
});

it('renders correct material line multi', () => {
  const tree = {
    materials : ["colMat2", "colMat4", "colMat10"]
  };
  expect(tree).toMatchSnapshot({
    materials : expect.anything(lineMaterials)
  });
});

it('renders correct material area single', () => {
  const tree = {
    materials : ["colMat2"]
  };
  expect(tree).toMatchSnapshot({
    materials : expect.anything(areaMaterials)
  });
});

it('renders correct material column single', () => {
  const tree = {
    materials : ["colMat2"]
  };
  expect(tree).toMatchSnapshot({
    materials : expect.anything(columnMaterials)
  });
});

