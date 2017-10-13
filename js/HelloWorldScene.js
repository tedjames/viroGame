'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  ViroSkyBox,
  Viro3DObject,
  ViroMaterials
} from 'react-viro';

var HelloWorldScene = React.createClass({
  render: function() {
    return (
      <ViroScene>
        <ViroSkyBox source={{
          nx:require('./res/sor_hills/hills_lf.jpg'),
          px:require('./res/sor_hills/hills_rt.jpg'),
          ny:require('./res/sor_hills/hills_dn.jpg'),
          py:require('./res/sor_hills/hills_up.jpg'),
          nz:require('./res/sor_hills/hills_bk.jpg'),
          pz:require('./res/sor_hills/hills_ft.jpg')}}
        />
      <Viro3DObject source={require('./res/modelsUpdated/SimpleMilitary_Characters.vrx')}
          position={[0.0, 0.0, -2]}
          scale={[0.8, 0.8, 0.8]}
          type="VRX"
          resources={[
            require('./res/modelsUpdated/SimpleMilitary_General_Brown.png')
          ]}
        />
        <ViroText text="Hello World!" width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
      </ViroScene>
    );
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldScene;
