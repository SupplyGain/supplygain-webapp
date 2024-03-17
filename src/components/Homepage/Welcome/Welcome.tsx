import { Button, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react"
import ConnectWalletButton from "../../ConnectWalletButton/ConnectWalletButton"
import StyledCard from "../../Shared/StyledCard/StyledCard"

const Welcome = () => {
  return (
    <StyledCard p={4} h={["auto", "auto", "full"]}>
      <VStack w="full" align={"flex-start"} spacing={4}>
        <Heading>Welcome Sponsors</Heading>
        <Text fontSize="xl">
          You can use this page to issue bountys to companies.
        </Text>
        <HStack
          justifyContent={"space-between"}
          w="full"
          wrap={"wrap"}
          spacing={4}
        >
          <ConnectWalletButton />
        </HStack>
      </VStack>
    </StyledCard>
  )
}

export default Welcome
