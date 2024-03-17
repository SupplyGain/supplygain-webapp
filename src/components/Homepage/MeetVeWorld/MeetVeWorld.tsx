import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { useConnex, useWallet } from "@vechain/dapp-kit-react"
import { parse } from "path"
import { useAppState } from "../../../context/WalletContext"
import SponsorsForm from "../../SponsorsForm/SponsorsForm"

const MeetVeWorld = () => {
  const { thor, vendor } = useConnex()
  const { account } = useWallet()
  const contract_address = "0xb5b287dfe3edf221f5efbcb7fef34e24c393ddb8"

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
      const someClause = thor
        .account(contract_address)
        .method(methodABI)
        .asClause(name, description)

      const wei2reward = parseInt(reward) * 10 ** 18
      someClause.value = wei2reward.toString()

      try {
        await vendor
          .sign("tx", [
            {
              ...someClause,
              comment: "Start new award",
            },
          ])
          .request()
      } catch (e) {
        console.error(e)
      }

      console.log("Submitted:", name, description, reward)
    }
  }

  const handleWithdrawFunds = async () => {
    const methodABI = {
      inputs: [],
      name: "withdrawUnspentFunds",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    }

    if (account) {
      const someClause = thor
        .account(contract_address)
        .method(methodABI)
        .asClause()

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
