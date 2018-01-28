import * as React from 'react'
import { Component } from 'react'
import { Icon, StyleProvider, getTheme } from 'native-base'
import ownStyle from './style'

interface ICustomIconProps {
  name: string,
  family?: string,
  style: object
}

export default class CustomIcon extends Component<ICustomIconProps> {

  render() {
    const { family, name, style } = this.props;
    const customTheme = getTheme({ iconFamily: family })
    const icon = <Icon name={name} style={[ownStyle.icon, style]} />

    return (
      <StyleProvider style={customTheme}>
        {icon}
      </StyleProvider>
    )
  }
}