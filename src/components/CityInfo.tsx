import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import ReactCountryFlag from 'react-country-flag';
import { City } from '../pages/continent/[slug]';

interface CityInfoProps {
  city: City;
}

export function CityInfo({ city }: CityInfoProps) {
  return (
    <Box minW="256px" mx={['auto', '0']}>
      <Image
        borderTopRadius="4"
        src={city.imageUrl}
        alt={city.name}
        w="256"
        h="173"
        objectFit="cover"
      />
      <Flex
        justify="space-between"
        align="center"
        p={6}
        border="1px"
        borderColor="yellow.100"
        borderTop="0"
        borderBottomRadius="4"
      >
        <Flex direction="column">
          <Heading as="h3" fontSize="xl" fontWeight="600" mb={3}>
            {city.name}
          </Heading>
          <Text color="gray.500" fontSize="md" fontWeight="500">
            {city.country}
          </Text>
        </Flex>

        <ReactCountryFlag
          style={{
            fontSize: '2em',
            lineHeight: '2em',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          aria-label={city.country}
          countryCode={city.countryCode}
          svg
        />
      </Flex>
    </Box>
  );
}
