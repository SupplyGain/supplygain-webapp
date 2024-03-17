import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { useConnex, useWallet } from "@vechain/dapp-kit-react"
import { useAppState } from "../../../context/WalletContext"
import SponsorsForm from "../../SponsorsForm/SponsorsForm"

const MeetVeWorld = () => {
  const { thor, vendor } = useConnex()
  const { account } = useWallet()

  const handleSubmit = async (
    name: string,
    description: string,
    reward: string
  ) => {
    const methodABI = {
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "createSponsorship",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    }
    if (account) {
      console.log("hi" + account)
      const someClause = thor
        .account(account)
        .method(methodABI)
        .asClause(name, description)

      await vendor
        .sign("tx", [
          {
            ...someClause,
            comment: "Start new award",
          },
        ])
        .request()
    }

    console.log("Submitted:", name, description, reward)
  }

  const handleWithdrawFunds = async () => {
    // Your withdraw funds logic goes here
    const methodABI = {
      inputs: [
        {
          internalType: "uint256",
          name: "campaignId",
          type: "uint256",
        },
      ],
      name: "withdrawUnspentFunds",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    }

    if (account) {
      const someClause = thor.account(account).method(methodABI).asClause()

      await vendor
        .sign("tx", [
          {
            ...someClause,
            comment: "Withdraw funds",
          },
        ])
        .request()
    }

    console.log("Withdraw funds clicked")
  }

  return (
    <HStack>
      <SponsorsForm
        onSubmit={handleSubmit}
        onWithdrawFunds={handleWithdrawFunds}
      ></SponsorsForm>
    </HStack>
  )
}

export default MeetVeWorld
