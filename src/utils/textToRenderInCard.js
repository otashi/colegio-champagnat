const textToRenderInCard = (content) => {
  const textArray = content.split(' ');
  if (textArray.length <= 25) {
    return content;
  } else {
    return `${textArray.splice(0, 25).join(' ')}...`;
  }
};

export { textToRenderInCard };
