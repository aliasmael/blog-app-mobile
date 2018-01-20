import * as React from 'react'
import {
  Text,
  Content,
  Container
} from 'native-base'
import AppHeader from '../../components/AppHeader/AppHeader'
import FooterNav from '../../components/FooterNav/FooterNav'

interface IHomeScreenProps {
  navigation: any
}

export default class HomeScreen extends React.Component<IHomeScreenProps> {
  render() {
    return (
      <Container>
        <AppHeader openDrawer={() => this.props.navigation.navigate("DrawerOpen")} />

        <Content padder>
          <Text>
            Hello BlogApp!
          </Text>
        </Content>

        <FooterNav
          navigation={this.props.navigation}
          screen="Home"
        />
      </Container>
    );
  }
}