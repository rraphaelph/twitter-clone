import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>
      
        <ProfileInfo>
          <strong>raphael</strong>
          <span>8957 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage/>

      <BottomMenu>
        <HomeIcon className='active' />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </ BottomMenu>
      
    </Container>

  )
}

export default Main;