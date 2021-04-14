const checkPercentage = (long: any, stop: any) => {
  if (long === 0) return 0.0;
  if (stop > long) stop = long;
  const perc = (stop / long) * 100;
  return perc.toFixed(1);
};

export default checkPercentage;
