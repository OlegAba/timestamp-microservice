import React, { FunctionComponent, useState } from 'react';
import { StyledEndpoint } from './Endpoint.styled';
import EndpointButton from './endpointButton/EndpointButton';
import EndpointAccordion from './endpointAccordion/EndpointAccordion';
import { endpointParams, endpointCodes } from './Endpoint.interface';

interface Props {
  isDarkMode: boolean,
}

const Endpoint: FunctionComponent<Props> = ({ isDarkMode }) => {

  const [active, setActive] = useState(true);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(!active)
  };

  return(
    <StyledEndpoint>
      <EndpointButton 
        method='GET'
        endpoint='/api/{date?}'
        active={active}
        onClick={buttonHandler}
      />
      <EndpointAccordion 
        active={active}
        isDarkMode={isDarkMode}
        params={endpointParams}
        codes={endpointCodes}
      />
    </StyledEndpoint>
  );
}

export default Endpoint