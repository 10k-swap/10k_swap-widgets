import { validateAndParseAddress as getAddress } from 'starknet/utils/address'
import { toBN } from 'starknet/utils/number'
import { ADDRESS_ZORE, ESTIMATE_GAS_FREE } from '../constants'
import { number } from 'starknet'
import * as buffer from 'buffer'
import { BN } from '../types'
import { Token, TokenAmount, ZERO } from 'l0k_swap-sdk'
import { ethers } from '../constants/tokens'

export function isAddress(address: any): string | false {
  try {
    const parsed = getAddress(address)
    return parsed === ADDRESS_ZORE ? false : address
  } catch (error) {
    return false
  }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4) {
  if (!address) {
    return ''
  }
  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`
}

export function isEqualsAddress(addressA: string, addressB: string): boolean {
  return toBN(addressA).eq(toBN(addressB))
}

export function parseBN2String(value: BN | undefined): string {
  return value ? number.toBN(value).toArrayLike(buffer.Buffer, 'utf-8').toString() : ''
}

export function isEther(token: Token) {
  const ETH = ethers[token.chainId]

  return isEqualsAddress(token.address, ETH.address)
}

export function getDeductGasMaxAmount(amount: TokenAmount | undefined): TokenAmount | undefined {
  if (!amount || amount.equalTo(ZERO)) {
    return undefined
  }

  const deductedAmount = isEther(amount.token) ? amount.subtract(new TokenAmount(amount.token, ESTIMATE_GAS_FREE)) : amount

  return deductedAmount.lessThan(ZERO) || deductedAmount.equalTo(ZERO) ? undefined : deductedAmount
}
