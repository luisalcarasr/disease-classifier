const getEGFRDrop = (prev, next) => parseFloat((1 - next / prev).toFixed(2));

export { getEGFRDrop };
