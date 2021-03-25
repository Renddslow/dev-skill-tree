const getPosition = (fromCenter = 0, row) => {
  const spacer = fromCenter < 0 ? -12 : 12;

  return {
    x: (fromCenter === 0 ? 0 : fromCenter * 115 + spacer) + 450,
    y: row * 125,
  };
};

export default getPosition;
