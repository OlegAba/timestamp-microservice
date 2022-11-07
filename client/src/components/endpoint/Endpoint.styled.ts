import styled from "styled-components";

export const StyledEndpoint = styled.div`
  .title-container {
    vertical-align: bottom;
    line-height: 50px;
    display: flex;
    border-bottom: 2px solid ${props => props.theme.colors.border};

    p {
      margin-left: 15px;
    }
  }

  .methods-container {
    margin-top: 10px;
  }
`;
