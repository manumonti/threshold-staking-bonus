import { DelegateChanged } from "../generated/TokenStaking/TokenStaking"
import { OperatorConfirmed } from "../generated/SimplePREApplication/SimplePREApplication"
import { Delegation, Operator } from "../generated/schema"

export function handleDelegateChanged(event: DelegateChanged): void {
  let delegation = Delegation.load(event.params.delegator.toHexString())
  if (!delegation) {
    delegation = new Delegation(event.params.delegator.toHexString())
  }
  delegation.delegator = event.params.delegator
  delegation.delegate = event.params.toDelegate
  delegation.save()
}

export function handleOperatorConfirmed(event: OperatorConfirmed): void {
  let operator = Operator.load(event.params.stakingProvider.toHexString())
  if (!operator) {
    operator = new Operator(event.params.stakingProvider.toHexString())
  }
  operator.stakingProvider = event.params.stakingProvider
  operator.operator = event.params.operator
  operator.save()
}
