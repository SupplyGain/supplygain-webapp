import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  Tooltip,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import StyledCard from "../../Shared/StyledCard/StyledCard"

const Features = () => {
  const initialPastEvents = [
    {
      eventName: "Sustainable EV Battery Challenge",
      description:
        "Find the most sustainable battery technology for electric vehicles.",
      award: "10,000 USD",
    },
    {
      eventName: "Renewable Energy Innovation Contest",
      description:
        "Develop innovative solutions for renewable energy generation and storage.",
      award: "25,000 USD",
    },
    {
      eventName: "Zero Waste Manufacturing Challenge",
      description: "Design and implement zero waste manufacturing processes.",
      award: "15,000 USD",
    },
  ]
  return (
    <StyledCard p={4} h={["auto", "auto", "full"]}>
      <VStack w="full" align="flex-start" spacing={4}>
        <Heading>Past Sustainability Issued Bounties</Heading>
        <VStack align="flex-start" spacing={4}>
          {initialPastEvents.map((event, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
            >
              <Heading as="h3" size="md">
                {event.eventName}
              </Heading>
              <Text>{event.description}</Text>
              <Text>
                <strong>Award:</strong> {event.award}
              </Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </StyledCard>
  )
}

export default Features
