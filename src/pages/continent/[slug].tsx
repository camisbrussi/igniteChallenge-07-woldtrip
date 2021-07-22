import {
  Flex,
  Text,
  Box,
  useBreakpointValue,
  HStack,
  SimpleGrid,
  Center,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import { ContinentInfo as Info } from '../../components/ContinentInfo';

import { CityInfo } from '../../components/CityInfo';

import { api } from '../../services/api';

export type City = {
  id: number;
  name: string;
  country: string;
  imageUrl: string;
  countryCode: string;
};

type Continent = {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  imageUrl: string;
  bannerUrl: string;
  countries: number;
  languages: number;
  amountMostPopularCities: number;
};

interface ContinentProps {
  continent: Continent;
  mostPopularCities: City[];
}

export default function Continent({
  continent,
  mostPopularCities,
}: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box w="100%" minW={1440} align="center">
      <Header hasBackButton />
      <Box
        w="100%"
        minW={1440}
        maxW={1440}
        h={['150', '500']}
        mx="auto"
        bg={`url(${continent[0].bannerUrl}) no-repeat`}
        pl="140"
        pt="369"
        pb="59"
      >
        {isWideVersion ? (
          <Text
            as="h1"
            fontWeight="600"
            fontSize="5xl"
            color="gray.50"
            position="absolute"
            bottom="60px"
            textTransform="capitalize"
          >
            {continent[0].name}
          </Text>
        ) : (
          <Center w="100%" h="100%">
            <Text as="h1" fontWeight="600" fontSize="1.75rem" color="gray.50">
              {continent[0].name}
            </Text>
          </Center>
        )}
      </Box>

      <Box maxW="1240" h="100%" px={['4', '10']}>
        <Flex
          display={{ md: 'flex' }}
          direction={['column', 'row']}
          justify={'space-between'}
          align="center"
          mt={['6', '20']}
          mb={['8', '20']}
        >
          <Text
            maxW="600"
            fontSize={['sm', '2xl']}
            lineHeight={['5', '9']}
            textAlign="justify"
            fontWeight="400"
          >
            {continent[0].description}
          </Text>
          <HStack spacing={10} mt={['4', '0']} maxW="600">
            <Info title="países" total={continent[0].countries} />

            <Info title="línguas" total={continent[0].languages} />

            <Info
              title="cidades +100"
              total={continent[0].amountMostPopularCities}
              hasTooltip={true}
            />
          </HStack>
        </Flex>

        <Box>
          <Text
            as="h1"
            fontWeight="500"
            fontSize={['2xl', '4xl']}
            color="gray.600"
          >
            Cidades +100
          </Text>

          <SimpleGrid
            columns={[1, 4]}
            spacing={[5, 10]}
            my={['5', '45px']}
            minChildWidth="256px"
          >
            {mostPopularCities.map((city) => (
              <CityInfo key={city.id} city={city} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let continent: Continent;
  let mostPopularCities: City[];

  const { slug } = params;

  await api.get<Continent>(`continents/?slug=${slug}`).then((response) => {
    continent = response.data;
  });

  await api
    .get<City[]>(`cities/?continent_id=${continent[0].id}`)
    .then((response) => {
      mostPopularCities = response.data;
    });

  return {
    props: {
      continent,
      mostPopularCities,
    },
    revalidate: 60 * 60, // 1 hour,
  };
};
