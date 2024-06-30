import { View, FlatList } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'

export default function ExploreBusinessList({ businessList }) {
  return (
    <FlatList
      data={businessList}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <BusinessListCard 
          business={item}
        />
      )}
      ListFooterComponent={<View style={{ height: 200 }} />}
    />
  )
}
