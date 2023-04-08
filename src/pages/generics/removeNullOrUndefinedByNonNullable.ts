export const removeNullOrUndefinedByNonNullable = <T,>(arr: (T | null | undefined)[]): T[] => {
  return arr.filter((value) => value !== null && value !== undefined) as NonNullable<T>[];
}