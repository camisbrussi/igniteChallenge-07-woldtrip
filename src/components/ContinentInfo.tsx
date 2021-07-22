import { Flex, Icon, Text, Tooltip, Box } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

interface ContinentInfoProps {
  title: string;
  total: number;
  hasTooltip?: boolean;
}

export function ContinentInfo({
  title,
  total,
  hasTooltip = false,
}: ContinentInfoProps) {
  return (
    <Flex direction="column" align={['flex-start', 'center']} px={['0', '2']}>
      <Text fontSize={['2xl', '5xl']} color="yellow.500" fontWeight="600">
        {total}
      </Text>
      {hasTooltip ? (
        <Flex align="center">
          <Text fontSize={['xs', 'sm', '2xl']} fontWeight={['400', '600']}>
            {title}
          </Text>

          <Tooltip
            label="100 cidades mais visitadas do mundo"
            bg="gray.600"
            color="gray.50"
          >
            <Box>
              <Icon as={FiInfo} fontSize={['xs', 'md']} ml={1} opacity="0.5" />
            </Box>
          </Tooltip>
        </Flex>
      ) : (
        <Text fontSize={['xs', 'sm', '2xl']} fontWeight={['400', '600']}>
          {title}
        </Text>
      )}
    </Flex>
  );
}
