import {removeNullOrUndefined} from "@/pages/generics/removeNullOrUndefined";

const nullableStringArray = ['a', null, 'b', undefined, 'c'];
const nullableNumberArray = [1, null, 2, undefined, 3];
const nullableStringOrNumberArray = [1, null, 'a', undefined, 2];

const nonNullableStringArray = removeNullOrUndefined(nullableStringArray); // string[]
const nonNullableNumberArray = removeNullOrUndefined(nullableNumberArray); // number[]
const nonNullableStringOrNumberArray = removeNullOrUndefined(nullableStringOrNumberArray); // (string | number)[]

console.log(nonNullableStringArray); // ['a', 'b', 'c']
console.log(nonNullableNumberArray); // [1, 2, 3]
console.log(nonNullableStringOrNumberArray); // [1, 'a', 2]

export default function GenericsPage() {
  return (
    <h1>Generics Demo</h1>
  )
}

