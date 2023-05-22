import React from 'react';

 import { 
  Container, 
  Retweeted, 
  TwitterIcon, 
  Avatar, 
  Body, 
  Content, 
  Header, 
  Dot, 
  Description, 
  ImageContent, 
  Icons, 
  Status, 
  CommentIcon, 
  RetweetIcon, 
  LikeIcon 
} from './styles';

const Tweets: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <TwitterIcon/>
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar/>
        <Content>
          <Header>
            <strong>Raphael</strong>
            <span>@rraphaelph</span>
            <Dot/>
            <time>11 de nov</time>
          </Header>
          <Description>Descricao do twitter</Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon/>
              18
            </Status>
            <Status>
              <RetweetIcon/>
              18
            </Status>
            <Status>
              <LikeIcon/>
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  ); 
}

export default Tweets;