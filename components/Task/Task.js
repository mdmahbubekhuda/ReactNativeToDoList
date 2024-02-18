import { Dimensions, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'

export default function Task({ item: text, handleDelete, idx }) {

  const { width: screenSize } = useWindowDimensions()
  console.log(text)
  return (
    <View style={[styles.container, { width: screenSize }]}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={() => handleDelete(idx)} style={styles.deleteButton} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  text: {
    width: '90%',
  },
  deleteButton: {
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundColor: '#ff6347',
  }
})