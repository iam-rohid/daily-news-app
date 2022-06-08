import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { PublisherFeed } from '@news-app/common';
import Image from 'next/image';
import moment from 'moment';
type Props = { data: PublisherFeed };

const HomePage: NextPage<Props> = ({ data }) => {
  return (
    <Container maxW="1680px">
      {data.newsFeed.map((collection, index) => (
        <Box as="section" my={16} key={index}>
          <Text fontSize={32} fontWeight="semibold">
            {collection.name}
          </Text>
          <Grid
            mt={8}
            gap={6}
            gridTemplateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
              'repeat(5, 1fr)',
            ]}
            alignItems="stretch"
          >
            {collection.items?.map((item, index) => {
              return (
                <GridItem key={index}>
                  <Box
                    as="a"
                    target="_blank"
                    href={item.originalUrl}
                    h="full"
                    bgColor="gray.50"
                    borderRadius={12}
                    boxShadow="0 0 0 1px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)"
                    display="flex"
                    flexDirection="column"
                    _hover={{
                      boxShadow:
                        '0 0 0 1px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Box padding={4} flex={1}>
                      <Text fontSize={20} fontWeight="semibold" mb={2}>
                        {item.title}
                      </Text>
                      {item.excerpt && (
                        <Text noOfLines={2}>{item.excerpt}</Text>
                      )}
                    </Box>
                    <Box
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 12,
                        aspectRatio: '3/2',
                        bgColor: 'gray.100',
                      }}
                      mx={2}
                    >
                      {!!item.image?.url && (
                        <Image
                          src={item.image?.url}
                          alt={item.image?.altText || item.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      )}
                    </Box>
                    <Box padding={4}>
                      <Text>{moment(item.time).fromNow()}</Text>
                    </Box>
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await axios(
    'http://localhost:8080/api/v1/publishers/prothomalo',
  );
  return {
    props: {
      data,
    },
  };
};
