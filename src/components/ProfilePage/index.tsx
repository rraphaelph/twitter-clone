import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage, 
  EditButton,
 } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        
        <h1>Raphael</h1>
        <h2>@rraphaelph</h2>

        <p>
          Software dev <a href='google.com'>@Google</a>
        </p>
        
        <ul>
           <li>
             <LocationIcon />
             Belo
           </li>
           <li>
             <CakeIcon />
             Nascido(a) em 11 de novembro de 2000
           </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong> 10 </strong>
          </span>
          <span>
            <strong> 100 </strong> seguidores 
          </span>

        </Followage>

      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage;