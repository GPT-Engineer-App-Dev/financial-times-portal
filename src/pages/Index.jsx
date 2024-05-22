import { Container, Box, Flex, VStack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" mt={4}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box flex="1" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
            <VStack spacing={4} align="stretch">
              <Box bg="white" p={4} boxShadow="md" borderRadius="md">
                <Text fontSize="2xl" fontWeight="bold">Main Article</Text>
                <Text mt={2}>This is the main content area where articles will be displayed.</Text>
              </Box>
              <Box bg="white" p={4} boxShadow="md" borderRadius="md">
                <Text fontSize="2xl" fontWeight="bold">Another Article</Text>
                <Text mt={2}>This is another article in the main content area.</Text>
              </Box>
            </VStack>
          </Box>
          <Sidebar />
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;