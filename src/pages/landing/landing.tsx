import { Box } from '@chakra-ui/react';
import React from 'react';
import { Intro } from './sections/intro';
import { Commitments } from './sections/commitments';
import { Testimonials } from './sections/testimonials';
export const Landing = () => {
    return <Box>
    <Intro/>
    <Commitments />
    <Testimonials/>    
    </Box>
};