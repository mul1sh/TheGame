import { MetaButton, MetaHeading } from '@metafam/ds';
import React, { useContext } from 'react';

import { SetupContext } from '../contexts/SetupContext';
import { FlexContainer } from './Container';

export const SetupProfession: React.FC = () => {
  const { useProgress } = useContext(SetupContext);
  const numProgressSteps = 3;
  const [currentProgress, onNextPress] = useProgress(numProgressSteps);

  return (
    <FlexContainer flex={1}>
      {currentProgress === 0 && (
        <MetaHeading mb={10}>What are your superpowers?</MetaHeading>
      )}
      {currentProgress === 1 && <MetaHeading mb={10}>Availability</MetaHeading>}
      {currentProgress === 2 && <MetaHeading mb={10}>Memberships</MetaHeading>}
      <MetaButton onClick={onNextPress}>Next Step</MetaButton>
    </FlexContainer>
  );
};
