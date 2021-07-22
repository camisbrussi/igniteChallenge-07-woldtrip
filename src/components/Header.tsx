import {
  Flex,
  Image,
  Link as ChakraLink,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';

interface HeaderProps {
  hasBackButton?: boolean;
}

export function Header({ hasBackButton }: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1440}
      h={isWideVersion ? '100' : '50'}
      mx="auto"
      align="center"
      mt="1"
    >
      {hasBackButton && (
        <Link href="/">
          <ChakraLink position="absolute" left={['16px', '40px']}>
            <Icon as={FiChevronLeft} fontSize={['1rem', '2rem']} />
          </ChakraLink>
        </Link>
      )}
      <Image
        src="/images/logo.svg"
        alt="logo"
        m="auto"
        w={!isWideVersion && '184'}
      />
    </Flex>
  );
}
