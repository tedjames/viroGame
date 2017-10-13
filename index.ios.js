/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

import { apiKey } from './apiKey';
const sharedProps = { apiKey };

// Default VR scene
var InitialVRScene = require('./js/HelloWorldScene');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      vrHeadset: UNSET,
      sharedProps : sharedProps
    }
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getVRNavigator = this._getVRNavigator.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    const { vrHeadset } = this.state;
    if (vrHeadset == UNSET) {
      return this._getExperienceSelector();
    } else if (vrHeadset == true) {
      return this._getVRNavigator();
    } else if (vrHeadset == false) {
      return this._getVRNavigator();
    }
  }

  // Presents the user with a choice of an VR with our without a headset 
  _getExperienceSelector() {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

          <Text style={localStyles.titleText}>Welcome to Viro Zombies. Do you have a VR headset?</Text>

          <TouchableHighlight style={localStyles.buttons} onPress={() => this.setState({ vrHeadset: true })} underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>YES</Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons} onPress={() => this.setState({ vrHeadset: false })} underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>NO</Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }

  // Returns the ViroSceneNavigator which will start the VR experience
  _getVRNavigator() {
    return (
      <ViroSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialVRScene}} vrModeEnabled={this.state.vrHeadset} />
    );
  }
}

var localStyles = StyleSheet.create({
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

AppRegistry.registerComponent('viroGame', () => ViroSample);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => ViroSample);
