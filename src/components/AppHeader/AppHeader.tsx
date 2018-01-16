import * as React from 'react'
import { Component } from 'react'
import { Header, Left, Button, Icon, Right, Body, Title } from 'native-base'
import style from './style'

interface IAppHeaderProps {
  openDrawer: () => void
}

export default class AppHeader extends Component<IAppHeaderProps> {
  render() {
    return (
      <Header style={style.header}>
        <Left style={style.left}>
          <Button transparent
            onPress={() => this.props.openDrawer()}
          >
            <Icon name='menu' style={style.icon} />
          </Button>
        </Left>

        <Body style={style.body}>
          <Title style={style.title}>BlogApp</Title>
        </Body>

        <Right style={{ flex: 1 }}>
          <Button transparent>
            <Icon name='search' style={style.icon} />
          </Button>
        </Right>
      </Header>
    )
  }
}