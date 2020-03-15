import React from 'react';
import styled from 'styled-components';
// import Counter from './counter/Counter_index';

export default (): any => (
  <LContainer>
    <LContent>
      {/* <Counter /> */}
    </LContent>
  </LContainer>
);

const LContainer = styled.div`
  width: '100%';
`;

const LContent = styled.div`
  width: auto;
  max-width: 1020px;
`;
