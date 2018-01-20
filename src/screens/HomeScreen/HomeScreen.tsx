import * as React from 'react'
import {
  Content,
  Container
} from 'native-base'
import AppHeader from '../../components/AppHeader/AppHeader'
import FooterNav from '../../components/FooterNav/FooterNav'
import Stream from '../../components/Stream/Stream'

interface IHomeScreenProps {
  navigation: any
}

export default class HomeScreen extends React.Component<IHomeScreenProps> {
  render() {
    return (
      <Container>
        <AppHeader openDrawer={() => this.props.navigation.navigate("DrawerOpen")} />

        <Content padder>
          <Stream />
        </Content>

        <FooterNav
          navigation={this.props.navigation}
          screen="Home"
        />
      </Container>
    );
  }
}