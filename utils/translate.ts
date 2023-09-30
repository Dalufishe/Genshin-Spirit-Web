const translate = (key: string, language: any) => {
  return (
    language.resources.string.find(
      (s: any) => s._name.toLowerCase() === key.toLowerCase()
    )?.__text || ""
  );
};

export default translate;
