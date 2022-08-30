import React, { FunctionComponent } from 'react';
import { StyledMain } from './Main.styled';
import Endpoint from '../endpoint/Endpoint';

const Main: FunctionComponent = (props) => {

  return(
    <StyledMain>
      <div className='title-container noselect'>
        <h2>date</h2>
        <p>returns a JSON object with a Unix and UTC timestamp</p>
      </div>
      <div className='endpoint-container'>
        <Endpoint />
      </div>
    </StyledMain>
  );
}

export default Main