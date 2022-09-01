import React, { FunctionComponent, useState } from 'react';
import { StyledEndpoint } from './Endpoint.styled';
import EndpointButton from './endpointButton/EndpointButton';
import EndpointAccordion from './endpointAccordion/EndpointAccordion';
import { EndpointData } from './Endpoint.interface';

interface Props {
  isDarkMode: boolean,
  endpointData: EndpointData
}

const Endpoint: FunctionComponent<Props> = ({ isDarkMode, endpointData }) => {

  const [active, setActive] = useState(true);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(!active)
  };

  return(
    <StyledEndpoint>
      <EndpointButton 
        method={endpointData.method}
        endpoint={endpointData.endpoint}
        active={active}
        onClick={buttonHandler}
      />
      <EndpointAccordion 
        active={active}
        isDarkMode={isDarkMode}
        params={endpointData.params}
        codes={endpointData.codes}
      />
    </StyledEndpoint>
  );
}

export default Endpoint