type MyNonNullable<T> = T extends null | undefined ? never : T;

export const excludeNullAndUndefinedByNonNullable = <T,>(array: (T | null | undefined)[]): T[] => {
  return array.filter((value) => value !== null && value !== undefined) as MyNonNullable<T>[];
}

const nullableStringArray = ['a', null, 'b', undefined, 'c'];
const nullableNumberArray = [1, null, 2, undefined, 3];
const nullableStringOrNumberArray = [1, null, 'a', undefined, 2];

const nonNullableStringArray = excludeNullAndUndefinedByNonNullable(nullableStringArray); // string[]
const nonNullableNumberArray = excludeNullAndUndefinedByNonNullable(nullableNumberArray); // number[]
const nonNullableStringOrNumberArray = excludeNullAndUndefinedByNonNullable(nullableStringOrNumberArray); // (string | number)[]

console.log(nonNullableStringArray); // ['a', 'b', 'c']
console.log(nonNullableNumberArray); // [1, 2, 3]
console.log(nonNullableStringOrNumberArray); // [1, 'a', 2]

export default function ConditionalTypesPage() {
  return (
    <h1>Conditional Types Demo</h1>
  )
}