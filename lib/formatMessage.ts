const formatMessage = (value: string) => {
  const fullWidthMarks = '，、；：！？。（）《》「」『』【】〔〕';
  const ascii = '\\x20-\\x7E';
  const noSpaceBefore = new RegExp(`\\s*([${fullWidthMarks}])`, 'gu');
  const noSpaceAfter = new RegExp(`([${fullWidthMarks}])\\s*([${ascii}])`, 'gu');
  const addSpaceBefore = new RegExp(`([^${ascii}${fullWidthMarks}])([${ascii}])`, 'gu');
  const addSpaceAfter = new RegExp(`([${ascii}])([^${ascii}${fullWidthMarks}])`, 'gu');
  return value
    .replace(noSpaceBefore, '$1')
    .replace(noSpaceAfter, '$1$2')
    .replace(addSpaceBefore, '$1 $2')
    .replace(addSpaceAfter, '$1 $2')
    .replace(/ +/g, ' ');
};

export default formatMessage;
