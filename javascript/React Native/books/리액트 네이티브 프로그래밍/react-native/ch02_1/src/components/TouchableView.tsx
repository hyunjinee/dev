import React from 'react'
import type { ComponentProps } from 'react'
import type { FC, ReactNode } from 'react'
import { TouchableOpacity, View } from 'react-native'
import type { StyleProp, ViewStyle } from 'react-native'

// export type TouchableViewProps = {
//   children?: ReactNode,
//   onPress?: () => void
// }

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>
export type TouchableViewProps = TouchableOpacityProps & {
  viewStyle?: StyleProp<ViewStyle>,
}
export const TouchableView: FC<TouchableViewProps> = ({ children, viewStyle, ...touchableProps }) => {
  return (
    <TouchableOpacity {...touchableProps}>
      <View style={[viewStyle]}>
        {children}
      </View>
    </TouchableOpacity>
  )
}
