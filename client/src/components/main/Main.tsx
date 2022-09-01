import React, { FunctionComponent } from 'react';
import { StyledMain } from './Main.styled';
import Endpoint from '../endpoint/Endpoint';

interface Props {
  isDarkMode: boolean,
}

const Main: FunctionComponent<Props> = ({ isDarkMode }) => {

  return(
    <StyledMain>
      <div className='title-container noselect'>
        <h2>date</h2>
        <p>returns a JSON object with a Unix and UTC timestamp</p>
      </div>
      <div className='endpoint-container'>
        <Endpoint isDarkMode={isDarkMode} />
      </div>
    </StyledMain>
  );
}

export default Main