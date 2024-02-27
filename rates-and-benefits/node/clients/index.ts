import { IOClients } from '@vtex/api'
import { Catalog, RatesAndBenefits } from '@vtex/clients'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get ratesAndBenefits() {
    return this.getOrSet('ratesAndBenefits', RatesAndBenefits)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }
}
