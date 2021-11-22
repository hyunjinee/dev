import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

const title = 'Content'
const avatars = D.makeArray(200).map((notUsed) => D.randomAvatarUrl())

export default function Content() {
  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avatarView}>
      <Image style={styles.avatar} source={{ uri: avatarUrl }} />
    </View>
  ))
  return (
    // <View style={[styles.view]}>
    //   {/* <Text style={[styles.text]}>{title}</Text> */}
    //   {children}
    // </View>
    <ScrollView contentContainerStyle={[styles.view]}>
      {children}
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  view: {
    padding: 5,
    backgroundColor: Colors.lightBlue500,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flex: 1,
    overflow: 'hidden'
  },
  text: { fontSize: 20, color: 'white', textAlign: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  avatarView: {
    padding: 3
  }
})