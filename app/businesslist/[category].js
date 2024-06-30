// // this is a dynamic route name will be changing to different category
// // business/category
// import { View, Text, FlatList } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useLocalSearchParams, useNavigation } from "expo-router";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "../../configs/FirebaseConfig";
// import BusinessListCard from "../../components/BusinessList/BusinessListCard";

// export default function BusinessListByCategory() {
//   const navigation = useNavigation();
//   const { category } = useLocalSearchParams();
//   const [businessList, setBusinessList] = useState([]);
//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: category,
//     });
//     getBusinessList();
//   }, []);
//   /**Used to get business list by category */
//   const getBusinessList = async () => {
//     const q = query(
//       collection(db, "BusinessList"),
//       where("category", "==", category)
//     );
//     const querySnapshot = await getDocs(q);

//     querySnapshot.forEach((doc) => {
//       console.log(doc.data());
//       setBusinessList((prev) => [...prev,{id:doc?.id,... doc.data()}]);
//     });
//   };
//   return (
//     <View>
//       <FlatList
//         data={businessList}
//         renderItem={({ item, index }) => {
//           <BusinessListCard business={item} key={index} />;
//         }}
//       />
//     </View>
//   );
// }
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { Colors } from "../../constants/Colors";

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (category) {
      navigation.setOptions({
        headerShown: true,
        headerTitle: category,
        headerStyle: {
          backgroundColor: Colors.PRIMARY, // Set your desired background color here
        },
        headerTitleStyle: {
          color: "#fff", // Set your desired text color here
        },
        headerTintColor: "#fff", // Set your desired back arrow color here
      });
      getBusinessList();
    }
  }, [category]);

  const getBusinessList = async () => {
    setLoading(true);
    if (!category) return;

    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);

    const businesses = [];
    querySnapshot.forEach((doc) => {
      businesses.push({ id: doc.id, ...doc.data() });
    });

    setLoading(false);

    setBusinessList(businesses);
  };

  return (
    <View>
      {businessList?.length > 0 && loading == false ? (
        <FlatList
          data={businessList}
          onRefresh={getBusinessList}
          refreshing={loading}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <BusinessListCard business={item} />}
        />
      ) : loading ? (
        <ActivityIndicator
          style={{ marginTop: "60%" }}
          size={"large"}
          color={Colors.PRIMARY}
        />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            color: Colors.GRAY,
            textAlign: "center",
            marginTop: "50%",
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
}
