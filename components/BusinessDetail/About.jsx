import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function About({business}) {
  return (
    <View style={{
        padding:20,
        backgroundColor:'#fff',
       

    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:22
      }}>About</Text>
      <Text
      style={{
        fontFamily:'outfit',
        lineHeight:25
      }}
      >{business?.about}</Text>
    </View>
  )
}