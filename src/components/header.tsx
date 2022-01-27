import { Box, Flex, HStack, Heading, Link } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
    return <Flex 
    px= "200px" py="20px" width="full" bg="blue.900" alignItems="flex-end" justifyContent="space-between">
        <Flex alignItems="flex-end">
            <Heading>My Logo</Heading>
            <HStack>
             <Link>Home</Link>
             <Link>Service</Link>
             <Link>About us</Link>
            </HStack>
            </Flex>
            <Link>
            sadsadsad
            </Link>
    </Flex>
};