const objetoA = {
  chaveC: 'valor A',
  chaveD: 'valor B'
}

const objetoB: Record<string, unknown> = {
  chaveA: 'valor A',
  chaveB: 'valor B'
}

const objetoC: {
  chaveA: string,
  chaveB: string,
  [key: string]: unknown
} = {
  chaveA: 'valor A',
  chaveB: 'valor B'
}
