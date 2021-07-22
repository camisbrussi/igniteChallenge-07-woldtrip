import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export interface SliderItemProps {
  slug: string;
  imageUrl: string;
  name: string;
  subtitle: string;
}

export function SlideItem({ slug, imageUrl, name, subtitle }: SliderItemProps) {
  return (
    <Link href={`/continent/${slug}`}>
      <a>
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
          maxW={1440}
          mx="auto"
          bg={`url(${imageUrl}) no-repeat`}
          p="140"
          mt="16"
        >
          <Text fontSize={['2xl', '5xl']} color="gray.50" fontWeight="700">
            {name}
          </Text>

          <Text
            fontWeight="bold"
            color="gray.100"
            fontSize={['sm', 'lg', 'xl']}
            mt={['12px', '4']}
            px="20"
          >
            {subtitle}
          </Text>
        </Flex>
      </a>
    </Link>
  );
}
