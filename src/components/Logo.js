import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/Logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 342,
    height: 268,
    left : 44,
    top : 142,

  },
})
