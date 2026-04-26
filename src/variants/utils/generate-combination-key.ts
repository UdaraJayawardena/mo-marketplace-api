export function generateCombinationKey(
  attributes: Record<string, any>,
): string {
  return Object.keys(attributes)
    .sort() 
    .map((key) => attributes[key])
    .join('-')
    .toLowerCase();
}