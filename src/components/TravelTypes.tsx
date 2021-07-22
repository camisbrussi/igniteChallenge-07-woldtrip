import { HStack, Image } from '@chakra-ui/react';

export function TravelTypes() {
  return (
    <HStack spacing="130" align="left" w={1160} mt={20} mx="auto">
      <Image src="/images/nightlife.svg" w={158} alt="vida noturna" m="auto" />
      <Image src="/images/beach.svg" w={85} alt="praia" m="auto" />
      <Image src="/images/modern.svg" w={113} alt="moderno" m="auto" />
      <Image src="/images/classic.svg" w={100} alt="clássico" m="auto" />
      <Image src="/images/more.svg" w={100} alt="e mais..." m="auto" />
    </HStack>
  );
}
