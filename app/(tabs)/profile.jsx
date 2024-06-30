import { View, Text } from 'react-native'
import React from 'react'
import UserIntro from '../../components/Profile/UserIntro'
import {Colors} from './../../constants/Colors'
import MenuList from '../../components/Profile/MenuList'
export default function profile() {
  return (
    <View style={{
      // padding:20
    }}>
      <View style={{
        backgroundColor:Colors.PRIMARY,
        paddingTop:35,
        paddingBottom:10,
        // borderBottomLeftRadius:15,
        // borderBottomRightRadius:15

      }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        color:'#fff'
      }}> Profile</Text>
      </View>

      {/* User Info */}
       <UserIntro/>
      {/* Menu List */}
      <MenuList/>
    </View>
  )
}