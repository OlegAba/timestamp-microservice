import styled from "styled-components";

export const StyledEndpoint = styled.div`

  #accordion {
    width: 100%;
    height: 0;
    overflow: hidden;

    h5 {
      background: ${path => path.theme.colors.secondaryBackground};
      width: 100%;
      padding: 20px;
    }
  }

  #accordion.open {
    border-style: solid;
    border-color: ${path => path.theme.colors.accent};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: ${path => path.theme.colors.secondaryAccent};
    border-width: 1px;
    height: auto;
    height: 500px;
  }

  .accordion-main-container {
    padding: 20px;
  }

  .accordion-row {
    display: flex;
  }

  .accordion-col-left {

  }

  .accordion-title-container {
    padding: 15px 0 15px 0;
    border-bottom: 1px solid ${props => props.theme.colors.backgroundActive};
  }

  .accordion-left {
    width: 200px;

    h4, code, p {
      padding: 10px 0 10px 0;
      width: 100%;
    }
  
    p {
      font-size: 12px;
      font-style: italic;
    }
  }

  .accordion-right {
    width: 100%;
  }
`;
