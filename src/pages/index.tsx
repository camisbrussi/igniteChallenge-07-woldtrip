import { Flex, Divider, Text, Box } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { Slide } from '../components/Slide';

export default function Home() {
  return (
    <Box w="100%" minW={1440}>
      <Header />
      <Banner />
      <TravelTypes />

      <Box align="center">
        <Divider mt="20" mb="20" w={90} borderColor="gray.700" />
        <Text fontSize={36}> Vamos nessa? </Text>
        <Text fontSize={36}> Então escolha seu continente </Text>
      </Box>

      <Box mb="16">
        <Slide />
      </Box>
    </Box>
  );
}
