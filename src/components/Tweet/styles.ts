import styled from "styled-components";

import {Chat, Favorite, faTwitter} from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);

`; 
export const TwitterIcon = styled(faTwitter)`
  width: 16px;
  height: 16px;

  margin-left: 35px;
  margin-right: 9px;

  > path {
    fill: var(--gray)
  }
  
`; 
export const Avatar = styled.div`
  display: flex;


`; 
export const Body = styled.div``; 
export const Content = styled.div``; 
export const Header = styled.div``; 
export const Dot = styled.div``; 
export const Description = styled.div``; 
export const ImageContent = styled.div``; 
export const Icons = styled.div``; 
export const Status = styled.div``; 
export const CommentIcon = styled.div``; 
export const RetweetIcon = styled.div``; 
export const LikeIcon = styled.div``; 