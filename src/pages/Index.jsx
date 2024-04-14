import { Box, Button, Container, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaMapMarkerAlt, FaPaperPlane, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.800" color="white" py={24}>
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={4}>
            Hire Top Software Developers
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles is the leading marketplace for companies to find and hire highly skilled developers specializing in web technologies like React, Node.js, .NET, Go, and JavaScript.
          </Text>
          <Button size="lg" colorScheme="blue">
            View Developer Listings
          </Button>
        </Container>
      </Box>

      {/* Features */}
      <Box py={24}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={12}>
            Why Hire on Particles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <FaSearch size={48} color="blue.500" />
              <Heading as="h3" size="lg" mt={4} mb={4}>
                Easily Find Developers
              </Heading>
              <Text>Our powerful search and filter tools make it simple to find the perfect developer for your project.</Text>
            </Box>
            <Box>
              <FaCode size={48} color="blue.500" />
              <Heading as="h3" size="lg" mt={4} mb={4}>
                Filter by Tech Stack
              </Heading>
              <Text>Narrow down candidates by the programming languages, frameworks, and technologies they specialize in.</Text>
            </Box>
            <Box>
              <FaPaperPlane size={48} color="blue.500" />
              <Heading as="h3" size="lg" mt={4} mb={4}>
                Built-in Messaging
              </Heading>
              <Text>Contact top developers directly through our integrated messaging system to discuss your project needs.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box bg="gray.50" py={24}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={12}>
            How It Works
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Stack spacing={8}>
              <Box>
                <Heading as="h3" size="lg">
                  <FaSearch style={{ display: "inline-block", marginRight: "8px" }} /> Search Developer Listings
                </Heading>
                <Text>Browse through our extensive database of top developers from around the world.</Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg">
                  <FaCode style={{ display: "inline-block", marginRight: "8px" }} /> Filter by Technology
                </Heading>
                <Text>Use filters to find developers that match your required technology stack and skillset.</Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg">
                  <FaPaperPlane style={{ display: "inline-block", marginRight: "8px" }} /> Message Developers
                </Heading>
                <Text>Reach out to developers using our built-in messaging system to discuss your project requirements.</Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg">
                  <FaMapMarkerAlt style={{ display: "inline-block", marginRight: "8px" }} /> Hire the Perfect Fit
                </Heading>
                <Text>Select the best developer for your project and budget, and get started building!</Text>
              </Box>
            </Stack>
            <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwwfHx8fDE3MTMwNTAyMzF8MA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" borderRadius="lg" shadow="lg" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* About */}
      <Box py={24}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={8}>
            About Particles
          </Heading>
          <Text fontSize="lg">Particles is the premier marketplace connecting companies with highly skilled software developers and engineers. We make it easy to find and hire the specialized development talent you need to bring your projects to life. With an extensive database of proven developers across the globe, Particles provides the tools and resources to match you with the perfect developer fit. Hire with confidence on Particles.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
