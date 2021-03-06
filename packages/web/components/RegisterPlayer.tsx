import { Button, ButtonGroup, MetaHeading } from '@metafam/ds';
import { Web3Context } from 'contexts/Web3Context';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import { FlexContainer } from './Container';

export const RegisterPlayer: React.FC = () => {
  return (
    <FlexContainer flex={1}>
      <MetaHeading m={5}>Register your Player account</MetaHeading>
      <ButtonGroup spacing={5} mt={20}>
        <RegisterButton>Connect Wallet</RegisterButton>
      </ButtonGroup>
    </FlexContainer>
  );
};

type ButtonProps = React.ComponentProps<typeof Button>;

const RegisterButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { connectWeb3 } = useContext(Web3Context);
  const router = useRouter();
  const login = async () => {
    await connectWeb3();
    router.push('/profile/success');
  };
  return (
    <Button
      onClick={login}
      variant="outline"
      size="lg"
      p={8}
      alignItems="center"
      {...props}
    >
      {children}
    </Button>
  );
};
