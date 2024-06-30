// import { View, Text, ActivityIndicator } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useLocalSearchParams } from 'expo-router'
// import { collection, doc,getDoc, query } from 'firebase/firestore';
// import { db } from '../../configs/FirebaseConfig';
// import { Colors } from '../../constants/Colors';

// export default function BusinessDetail() {

//     const{businessid}=useLocalSearchParams();
//     const{business,setBusiness}=useState(null);
//     const[loading,setLoading]=useState(false);
//     useEffect(()=>{
//         GetBusinessDetailById();
//     },[])
//         /**
//      * Used to get BUsiness Detail by ID
//      */
//     const GetBusinessDetailById=async()=>{
//         setLoading(true)
//         const docRef=doc(db,'BusinessList',businessid)
//         const docSnap=await getDoc(docRef);
//         if(docSnap.exists()){
//             console.log("Document data:",docSnap.data());
//             setBusiness(docSnap.data());
//             setLoading(false)
//         }else{
//             //docSnap.data() will be undefined in this case
//             console.log("No such document!");
//             setLoading(false)
//         }
//     }
//   return (
//     <View>
//         {loading?
//         <ActivityIndicator
//         size={'large'}
//         color={Colors.PRIMARY}
//         />
//         :<View></View>
//     }
//       <Text>{businessid}</Text>
//     </View>
//   )
// }
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';
import Reviews from '../../components/BusinessDetail/Reviews';

export default function BusinessDetail() {
  const { businessid } = useLocalSearchParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (businessid) {
      GetBusinessDetailById();
    }
  }, [businessid]);

  /**
   * Used to get Business Detail by ID
   */
  const GetBusinessDetailById = async () => {
    setLoading(true);
    const docRef = doc(db, 'BusinessList', businessid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setBusiness({id:docSnap.id,...docSnap.data()});
      setLoading(false)
    } else {
      console.log("No such document!");
    }
    setLoading(false);
  };

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator 
        style={{
            marginTop:'70%'
        }}
        size={'large'} color={Colors.PRIMARY} />
      ) : (
        business && (
          <View>
            {/* Intro */}
            <Intro business={business}/>
            {/* Action Buttons */}
            <ActionButton business={business}/>
            {/* About Section */}
            <About business={business}/>
            {/* Review section */}
            <Reviews business={business}/>
          </View>
        )
      )}
    </ScrollView>
  );
}
