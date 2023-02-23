import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box textAlign={{base:"left", md:"left", lg:"center"}} pl="15px" pr="15px" 
    bg="#6B46C1" pt="90px" pb="250" color="white">
        <Heading>Simple pricing for your business</Heading>
        <Text pt="5">Plans that are carefully crafted on suit your business.</Text>
    </Box>
  )
}
