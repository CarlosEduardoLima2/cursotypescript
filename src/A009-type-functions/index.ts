type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArra: string[] = []

  for (let i = 0; i < array.length; i++) {
    newArra.push(callbackfn(array[i]))
  }

  return newArra
}

const abc = ['a','b','c'];

const abcMapped = mapStrings(abc, item => item.toUpperCase())

console.log(abcMapped)