// import { View, Text, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import { Colors } from '../../constants/Colors';
// import { Ionicons } from '@expo/vector-icons';
// import Category from '../../components/Home/Category'
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../../configs/FirebaseConfig';
// import ExploreBusinessList from '../../components/Explore/ExploreBusinessList';
// export default function explore() {
//   const [businessList,setBusinessList]=useState([]);

//   const GetBusinessByCategory=async(category)=>{
//     setBusinessList([]);
//     const q=query(collection(db,'BusinessList'),where('category','==',category))
//     const querySnapshot=await getDocs(q);
//     querySnapshot.forEach((doc)=>{
//       // console.log(doc.data())
//       setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
//     })
//   }
//   return (
//     <View style={{
//       // padding:20
//     }}>
//       <View style={{
//         backgroundColor:Colors.PRIMARY,
//         paddingTop:35,
//         paddingBottom:10,
//         marginBottom:20
//         // borderBottomLeftRadius:15,
//         // borderBottomRightRadius:15

//       }}>
//       <Text style={{
//         fontSize:35,
//         fontFamily:'outfit-bold',
//         color:'#fff'
//       }}> Explore 
//       </Text>
      
//       {/* SearchBar */}
//       <View style={{
//             display:'flex',
//             flexDirection:'row',
//             gap:10,
//             alignItems:'center',
//             backgroundColor:'#fff',
//             padding:10,
//             marginVertical:10,
//             marginTop:15,
//             marginHorizontal:10,
//             borderRadius:8,
//             borderWidth:1,
//             borderColor:Colors.PRIMARY
//         }}>
//         <Ionicons name="search" size={24} color={Colors.PRIMARY} />
//         <TextInput placeholder='Search...'
//         style={{
//             fontFamily:'outfit',
//             fontSize:16
//         }}
//         />
//         </View>
//         </View>
//       {/* category */}
//       <Category
//       explore={true}
//       onCategorySelect={(Category)=>GetBusinessByCategory(Category)}
//       />
//       {/* Business List  */}
//      <ExploreBusinessList businessList={businessList}/>
//     </View>
//   )
// }
import { View, Text, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Category from '../../components/Home/Category';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList';

export default function Explore() {
  const [businessList, setBusinessList] = useState([]);

  const GetBusinessByCategory = async (category) => {
    setBusinessList([]);
    const q = query(collection(db, 'BusinessList'), where('category', '==', category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          paddingTop: 35,
          paddingBottom: 10,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'outfit-bold',
            color: '#fff',
          }}
        >
          Explore
        </Text>

        {/* SearchBar */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 10,
            marginVertical: 10,
            marginTop: 15,
            marginHorizontal: 10,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
          }}
        >
          <Ionicons name="search" size={24} color={Colors.PRIMARY} />
          <TextInput
            placeholder="Search..."
            style={{
              fontFamily: 'outfit',
              fontSize: 16,
            }}
          />
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {/* Category */}
        <Category explore={true} onCategorySelect={(category) => GetBusinessByCategory(category)} />
        {/* Business List */}
        <ExploreBusinessList businessList={businessList} />
      </ScrollView>
    </View>
  );
}
