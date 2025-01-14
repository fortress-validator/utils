const createTestFile = (kilobytes: number, fileName: string = ''): File => {
  const data = new Uint8Array(kilobytes * 1024);
  return new File([data], fileName);
};

export default createTestFile;
