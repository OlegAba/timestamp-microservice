import React, { FunctionComponent } from 'react';
import { StyledHeader } from './Header.styled';

interface IHeaderProps {
  title: string
}

const Header: FunctionComponent<IHeaderProps> = (props) => {

  return(
    <StyledHeader>
      <h1>{ props.title }</h1>
      <a href='https://olegaba-timestamp-microservice.herokuapp.com/api' target='_blank' rel='noopener noreferrer'>
        <code>[ Base URL: olegaba-timestamp-microservice.herokuapp.com/api ]</code>
      </a>
      <p>This is a sample Timestamp Microservice server. Find the source code at ...</p>
      <a href='google.com'>Source Code</a>
    </StyledHeader>
  );
}

export default Header