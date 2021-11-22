import React from 'react'
import type { FC, ComponentProps } from 'react'
import { Image, TextStyle, Text } from 'react-native'
import type { StyleProp, ImageStyle } from 'react-native'
import { TouchableView } from './TouchableView'
import type { TouchableViewProps } from './TouchableView'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// export type IconTextProps = TouchableViewProps & {
//   ComponentProps<typeof Icon > & {
//     text: number | string
//     textStyle?: StyleProp<TextStyle>
//   }
// }
export type IconTextProps = any

export const IconText: FC<IconTextProps> = ({ name, size, color, text, textStyle, ...touchableProps }) => {
  return (
    <TouchableView {...touchableProps}>
      <Icon name={name} size={size} color={color} />
      <Text style={textStyle}>{text}</Text>
    </TouchableView>
  )
}


// export type AvatarProps = TouchableViewProps & {
//   uri: string
//   size: number
//   imageStyle?: StyleProp<ImageStyle>
// }

// export const Avatar: FC<AvatarProps> = ({ uri, size, imageStyle, ...touchableProps }) => {
//   return (
//     <TouchableView {...touchableProps}>
//       <Image source={{ uri }}
//         style={[imageStyle, { width: size, height: size, borderRadius: size / 2 }]}
//       />
//     </TouchableView>
//   )
// }