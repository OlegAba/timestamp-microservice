import React, { FunctionComponent, useState } from 'react';
// import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { StyledEndpoint } from './Endpoint.styled';
import EndpointButton from './endpointButton/EndpointButton';

const Endpoint: FunctionComponent = (props) => {

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

      <div id='accordion' className={active ? "open" : ""}>
        <h5>Parameters</h5>

        <div className='accordion-main-container'>
          <div className='accordion-title-container accordion-row'>
            <h6 className='accordion-left'>Name</h6>
            <h6 className='accordion-right'>Description</h6>
          </div>

          <div className='accordion-row accordion-left'>
            <h4>date</h4>
            <code>string</code>
            <p>(path)</p>
          </div>
        </div>
      </div>
    </StyledEndpoint>
  );
}

export default Endpoint