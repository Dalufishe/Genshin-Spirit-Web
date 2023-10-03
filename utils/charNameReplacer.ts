export default (charName: string) => {
  return charName?.replace(" ", "_")?.toLowerCase();
};
