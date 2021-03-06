import { Box, Flex, Grid, Image, ResponsiveText } from '@metafam/ds';
import React, { useContext } from 'react';

import { SetupContext } from '../contexts/SetupContext';
import AvatarImage from '../public/images/avatar.png';
import BackImage from '../public/images/Back.svg';
import SkipImage from '../public/images/Skip.svg';
import { FlexContainer } from './Container';

export const SetupHeader: React.FC = () => {
  const { step, progress, setStep, numTotalSteps } = useContext(SetupContext);
  return (
    <Grid templateColumns="0.5fr 1fr 1fr 1fr 0.5fr" gap="1rem" w="100%">
      <FlexContainer
        justify="flex-end"
        onClick={() => {
          if (step > 0) {
            setStep((_step) => (_step - 1) % numTotalSteps);
          }
        }}
        cursor="pointer"
      >
        <Image src={BackImage} h="1rem" />
      </FlexContainer>
      <StepProgress
        title={['About You', '1. About You']}
        isActive={step === 0}
        isDone={step > 0}
        progress={step > 0 ? 1 : progress}
      />
      <StepProgress
        title={[
          'Portfolio',
          '2. Portfolio',
          '2. Portfolio',
          '2. Professional Profile',
        ]}
        isActive={step === 1}
        isDone={step > 1}
        progress={step > 1 ? 1 : progress}
      />
      <StepProgress
        title={['Play', '3. Play', '3. Start Playing']}
        isDone={false}
        isActive={step === 2}
        progress={progress}
      />
      <FlexContainer
        justify="flex-end"
        onClick={() => {
          if ((step + 1) % numTotalSteps !== 0) {
            setStep((_step) => (_step + 1) % numTotalSteps);
          }
        }}
        cursor="pointer"
      >
        <Image src={SkipImage} h="1rem" />
      </FlexContainer>
    </Grid>
  );
};

interface StepProps {
  title: any[] | Record<string, any>;
  isDone: boolean;
  isActive: boolean;
  progress: number;
}

export const StepProgress: React.FC<StepProps> = ({
  title,
  isDone,
  isActive,
  progress,
}) => (
  <FlexContainer pos="relative">
    <ResponsiveText
      w="100%"
      textTransform="uppercase"
      fontSize="xs"
      fontFamily="mono"
      fontWeight="bold"
      color="offwhite"
      opacity={isActive ? 1 : 0.4}
      mb={4}
      content={title}
    />
    <Flex
      bgColor="blue20"
      w="100%"
      h="0.5rem"
      borderRadius="0.25rem"
      overflow="hidden"
    >
      {(isActive || isDone) && (
        <Box bgColor="purple.400" w={`${progress * 100}%`} />
      )}
    </Flex>
    {isActive && (
      <Image
        mt={4}
        pos="absolute"
        w="1.5rem"
        top="100%"
        src={AvatarImage}
        left={`${progress * 100}%`}
        transform="translateX(-50%)"
      />
    )}
  </FlexContainer>
);
