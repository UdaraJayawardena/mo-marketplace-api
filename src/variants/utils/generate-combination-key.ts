export function generateCombinationKey(
  attributes: Record<string, any>,
): string {
  return Object.keys(attributes)
    .sort() // ensure consistent order
    .map((key) => attributes[key])
    .join('-')
    .toLowerCase();
}