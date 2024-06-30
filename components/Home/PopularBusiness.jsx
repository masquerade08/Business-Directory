import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import PopularBusinessCard from './PopularBusinessCard'

export default function PopularBusiness() {
    
    const [businessList,setbusinessList]=useState([]);

    useEffect(()=>{
        GetBusinessList();

    },[])
    const GetBusinessList=async()=>{
        setbusinessList([]);
        const q=query(collection(db,'BusinessList'),limit(10))
        const querySnapshot=await getDocs(q);
        querySnapshot.forEach((doc)=>{
            // console.log(doc.data());
            setbusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
        })
    }

  return (
    <View>
      <View style={{
            paddingLeft:20,
            marginBottom:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:20,

        }}>
      <Text style={{
       
        fontSize:20,
        fontFamily:'outfit-bold',}}>
        PopularBusiness
 
      </Text>
      <Text style={{
        color:Colors.PRIMARY,
        fontFamily:'outfit-medium',
      }}>View All</Text>
      </View>
      <FlatList 
      data ={businessList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
       <PopularBusinessCard 
       key={index}
       business={item}
       />
      )}
      
      />
    </View>
  )
}