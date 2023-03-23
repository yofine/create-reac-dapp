import { NETWORKS } from 'cons'
import { IObject } from 'types'
import * as _ from 'lodash'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const getNetworkNameByChainId = (chainId: number): IObject => {
  const network = _.find(
    NETWORKS,
    (network: IObject) => network.chainId === chainId
  )

  if (network) {
    return {
      name: network.name,
      chain: network.chain,
      chainId: network.chainId
    }
  } else {
    return {}
  }
}
