import { BigInt } from "@graphprotocol/graph-ts"
import { DelegateChanged } from "../generated/TokenStaking/TokenStaking"
import { Delegation } from "../generated/schema"

export function handleDelegateChanged(event: DelegateChanged): void {
  let delegation = Delegation.load(event.params.delegator.toHexString())
  if (!delegation) {
    delegation = new Delegation(event.params.delegator.toHexString())
  }
  delegation.delegator = event.params.delegator
  delegation.delegate = event.params.toDelegate
  delegation.save()
}
