import { Box, Button, Flex, Heading, Text, HStack,Icon } from '@chakra-ui/react'
import React from 'react'
import checkMarkIcon from './icons/checkMarkIcon'

export default function Pricing() {
  return (
    <Box bg="white" 
    maxW="950px"
     m="auto"
      mt="-220px" 
      //ml={{base:"20px",lg:"auto"}}
      //mr={{base:"20px",lg:"auto"}}
      mx={{base:"20px",lg:"auto"}}
       borderRadius={"16px"} overflow="hidden"
    boxShadow={" 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}
    >
        <Flex direction={{base:"column", md:"column", lg:'row'}}>
            {/* box container start*/}
        <Box bg="#DDD5f3" p="60px" textAlign="center">
            {/*left box*/}
            <Text fontSize={"24px"} fontWeight={"bold"}>Premium PRO</Text>
            <Heading fontSize={"60px"} >$329</Heading>
            <Text fontWeight="bold" >billed just once</Text>
            <Button bg="#805AD5" color="white" w="300px" mt="20px" >Get Started</Button>
        </Box >
        {/*right box*/}
        
        <Box pt="50px" pl="25px">
        <Text mb="25px">
          Acess thesse features when you get this pricing package for
           your business.</Text>

        <HStack mb="15px">
          <Icon as={checkMarkIcon}/>
        <Text >International calling and messaging API</Text>
        </HStack>

        <HStack mb="15px">
          <Icon as={checkMarkIcon}/>
        <Text>Additional phone numbers</Text>
        </HStack>

        <HStack mb="15px">
          <Icon as={checkMarkIcon}/>
        <Text>Automated messages via Zapier</Text>
        </HStack>

        <HStack mb="15px">
          <Icon as={checkMarkIcon}/>
        <Text >24/7 support and consulting</Text>
        </HStack>
        </Box>
        </Flex>
    </Box>
  )
}
