import { Box, VStack, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box w={{ base: "100%", md: "25%" }} bg="gray.100" p={4}>
      <VStack spacing={4} align="stretch">
        <Box bg="white" p={4} boxShadow="md" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Advertisement</Text>
          <Text mt={2}>Your ad here</Text>
        </Box>
        <Box bg="white" p={4} boxShadow="md" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Additional Content</Text>
          <Text mt={2}>More articles and links</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;