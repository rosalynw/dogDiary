import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <ScrollView style={styles.container}>
    <SafeAreaView>
      <Text style={styles.appTitle}>Dog Diary</Text>
    </SafeAreaView>
    </ScrollView>
 )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})