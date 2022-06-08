import React from 'react';
import { Box } from '@chakra-ui/react';
import ActivityBar from '../../activity-bar/ActivityBar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box
        width={16}
        borderRight="1px solid"
        borderRightColor="gray.100"
        position="fixed"
        left={0}
        top={0}
        bottom={0}
      >
        <ActivityBar />
      </Box>
      <Box as="main" ml={20}>
        {children}
      </Box>
    </>
  );
};

export default AppLayout;
