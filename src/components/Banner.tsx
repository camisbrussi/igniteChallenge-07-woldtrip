import {
  Flex,
  VStack,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      height={isWideVersion ? '335' : '163'}
      mx="auto"
      align="center"
      bg="url('/images/background.svg')"
      p="140"
    >
      <VStack spacing={4} align="left" px={['4', '10']}>
        <Text
          color="gray.50"
          fontSize={['xl', '4xl']}
          fontWeight="medium"
          w={426}
          mb={['2', '5']}
        >
          5 Continentes,infinitas possibilidades.
        </Text>
        <Text
          color="gray.100"
          fontSize={['sm', 'xl']}
          fontWeight="regular"
          w={524}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
        </Text>
      </VStack>
      <Image src="/images/airplane.svg" alt="logo" mt="110" ml="60" />
    </Flex>
  );
}
