/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, NativeModules, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {isOn:false}
    this.updateStatus();
  }

  turnOn = () => {
    NativeModules.Lampada.turnOn();
    this.updateStatus();
    console.log('Luz ligada');
  }
  
  turnOff = () =>{
    NativeModules.Lampada.turnOff();
    this.updateStatus();
    console.log('Luz desligada');
  }
  
  updateStatus = () =>{
    NativeModules.Lampada.getStatus((error, isOn)=>{
      this.setState({isOn})
    });
  }

  render() {
    const {isOn} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Treinamento Módulos nativos</Text>
        <Text style={styles.welcome}>=)</Text>
        {!isOn && <Button  title="Ligar Luz" color="green" onPress={this.turnOn}/>}
        {isOn && <Button  title="Desligar Luz" color="red" onPress={this.turnOff}/>}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
