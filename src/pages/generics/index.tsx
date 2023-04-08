import {excludeNullAndUndefined} from "@/pages/generics/excludeNullAndUndefined";

const nullableStringArray = ['a', null, 'b', undefined, 'c'];
const nullableNumberArray = [1, null, 2, undefined, 3];
const nullableStringOrNumberArray = [1, null, 'a', undefined, 2];

const nonNullableStringArray = excludeNullAndUndefined(nullableStringArray); // string[]
const nonNullableNumberArray = excludeNullAndUndefined(nullableNumberArray); // number[]
const nonNullableStringOrNumberArray = excludeNullAndUndefined(nullableStringOrNumberArray); // (string | number)[]

console.log(nonNullableStringArray); // ['a', 'b', 'c']
console.log(nonNullableNumberArray); // [1, 2, 3]
console.log(nonNullableStringOrNumberArray); // [1, 'a', 2]

export default function GenericsPage() {
  return (
    <h1>Generics Demo</h1>
  )
}

