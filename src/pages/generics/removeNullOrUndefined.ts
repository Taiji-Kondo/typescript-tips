export const removeNullOrUndefined = <T,>(arr: (T | null | undefined)[]): T[] => {
  return arr.filter((value): value is T => value !== null && value !== undefined);
}