import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useHistory } from "react-router-dom";



export  default Button =(props) => {

  return (
            <TouchableOpacity style={styles.button} {...props}>
              <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>
    );
  }
const styles = StyleSheet.create({

  
  button: {
    backgroundColor: '#8CC33F',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom:16
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
});