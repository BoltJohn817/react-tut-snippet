/*
File: src/model/historicalPriceObject.ts
*/

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface historicalPriceObject {
  price: number
}

export const initHistoricalPrice = (): historicalPriceObject => ({
  price: 0,
})
