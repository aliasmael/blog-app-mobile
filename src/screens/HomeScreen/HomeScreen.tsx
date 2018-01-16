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
          openHome={() => this.props.navigation.navigate("Home")}
          openExplore={() => this.props.navigation.navigate("Explore")}
          openNotifications={() => this.props.navigation.navigate("Notifications")}
          openSetting={() => this.props.navigation.navigate("Settings")}
          selectedTab="Home"
        />
      </Container>
    );
  }
}