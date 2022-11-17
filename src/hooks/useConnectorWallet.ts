import { ref, watch, onMounted, toRaw } from 'vue'
import { useStarknet } from '../starknet/providers/starknet'

const wallets: { [k: string]: string } = {
  argentx: 'Argent X',
  braavos: 'Braavos',
}

export default function useConnectorWallet() {
  const {
    state: { account, connector },
  } = useStarknet()

  const wallet = ref<string | null>(null)

  const getConnector = () => {
    const cconnectorRaw = toRaw(connector.value)
    if (cconnectorRaw && cconnectorRaw.available()) {
      const id = cconnectorRaw.id()
      wallet.value = id ? wallets[id.replace(/-|\s/g, '').toLowerCase()] ?? id : null
    }
  }

  watch([account], getConnector)
  onMounted(getConnector)

  return wallet
}
