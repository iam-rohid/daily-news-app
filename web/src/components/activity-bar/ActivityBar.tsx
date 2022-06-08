import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import Image from 'next/image';

const ActivityBar = () => {
  return (
    <Flex flexDir="column">
      <Flex
        flex={1}
        w="full"
        overflowY="auto"
        alignItems="center"
        flexDir="column"
        gap={2}
        py={2}
      >
        <IconButton
          aria-label="Prothom Alo"
          size="lg"
          variant="ghost"
          icon={
            <Box
              sx={{
                w: '32px',
                h: '32px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/publishers/prothomalo/prothom-alo-icon.png"
                alt="Prothom Alo"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          }
        />
        <IconButton
          aria-label="Prothom Alo"
          size="lg"
          variant="ghost"
          icon={
            <Box
              sx={{
                w: '32px',
                h: '32px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/publishers/prothomalo/prothom-alo-icon.png"
                alt="Prothom Alo"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          }
        />
      </Flex>
    </Flex>
  );
};

export default ActivityBar;
