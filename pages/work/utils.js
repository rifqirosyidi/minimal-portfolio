const getRGBColorFromImageSource = (src) => {
  const img = new Image();
  img.src = src;
  const canvas = document.createElement("canvas");
  const width = Math.max(1, Math.floor(img.width));
  const height = Math.max(1, Math.floor(img.height));
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const r = data[0];
  const g = data[1];
  const b = data[2];
  return `rgb(${r},${g},${b})`;
};

export default getRGBColorFromImageSource;
