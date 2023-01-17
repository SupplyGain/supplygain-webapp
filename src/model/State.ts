import { WalletSource } from "./enums"

export interface IAccount {
  address: string
  source: WalletSource
}

export interface IToken {
  address: string
  name: string
  symbol: string
  decimals: string
}

export interface INonFungibleToken {
  address: string
  name: string
  symbol: string
  tokenURI: string
}
