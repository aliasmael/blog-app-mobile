import * as React from 'react'
import {
  Text,
  Content,
  Container
} from 'native-base'
import AppHeader from '../../components/AppHeader/AppHeader'
import FooterNav from '../../components/FooterNav/FooterNav'

interface IExploreScreenProps {
  navigation: any
}

export default class ExploreScreen extends React.Component<IExploreScreenProps> {
  render() {
    return (
      <Container>
        <AppHeader openDrawer={() => this.props.navigation.navigate("DrawerOpen")} />

        <Content padder>
          <Text>
            Search and Explore Page
          </Text>
        </Content>

        <FooterNav
          openHome={() => this.props.navigation.navigate("Home")}
          openExplore={() => this.props.navigation.navigate("Explore")}
          openNotifications={() => this.props.navigation.navigate("Notifications")}
          openSetting={() => this.props.navigation.navigate("Settings")}
          selectedTab="Explore"
        />
      </Container>
    );
  }
}