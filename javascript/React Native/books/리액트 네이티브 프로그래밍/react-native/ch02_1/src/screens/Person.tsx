import React, { FC } from 'react'
import { Text, View, Image, Alert } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar, IconText } from '../components'
import * as D from '../data'
import { styles } from './Person.style'
import moment from 'moment-with-locales-es6'
moment.locale('ko')
export type PersonProps = {
  person: D.IPerson
}

const avatarPressed = () => Alert.alert('avatar pressed')
const deletePressed = () => Alert.alert('delete pressed')
const countIconPressed = (name: string) => Alert.alert(`${name} pressed`)

const Person: FC<PersonProps> = ({ person }) => {
  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed} />
      </View>
      <View>
        <Text>{person.name}</Text>
        <Text>{person.email}</Text>
      </View>
    </View>
    // <View style={[styles.view]}>
    //   <Image source={{ uri: person.avatar }} style={[styles.avatar]} />
    //   <View style={[styles.nameEmailView]}>
    //     <Text style={styles.name}>{person.name}</Text>
    //     <Text style={styles.email}>{person.email}</Text>
    //   </View>
    //   <View style={[styles.dateView]}>
    //     <Text>
    //       {moment(person.createdDate).startOf('day').fromNow()}
    //     </Text>
    //   </View>
    //   <Text style={[styles.text]}>{person.comments}</Text>
    //   <Image source={{ uri: person.image }} style={[styles.image]} />
    //   <View style={[styles.countsView]}>
    //     <Text>{person.counts.comment}</Text>
    //     <Text>{person.counts.retweet}</Text>
    //     <Text>{person.counts.heart}</Text>
    //   </View>
    // </View>
  )
}

export default Person