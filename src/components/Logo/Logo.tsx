import { HTMLChakraProps, Image, useColorModeValue } from "@chakra-ui/react"
import React from "react"

type IIMage = HTMLChakraProps<"img">

export const VechainLogo: React.FC<IIMage> = ({ ...props }) => {
  const lightModeUrl = process.env.PUBLIC_URL + "/images/logo/logo512.png"
  const darkModeUrl = process.env.PUBLIC_URL + "/images/logo/logo512.png"
  const logoUrl = useColorModeValue(lightModeUrl, darkModeUrl)
  return (
    <Image
      h="full"
      objectFit="cover"
      alt="Vechain logo"
      src={logoUrl}
      {...props}
    />
  )
}

export const VeWorldLogo: React.FC<IIMage> = ({ ...props }) => {
  const lightModeUrl = process.env.PUBLIC_URL + "/images/logo/logo512.png"
  const darkModeUrl = process.env.PUBLIC_URL + "/images/logo/logo512.png"
  const logoUrl = useColorModeValue(lightModeUrl, darkModeUrl)
  return (
    <Image
      h="full"
      objectFit="cover"
      alt="VeWorld logo"
      src={logoUrl}
      {...props}
    />
  )
}
