const getOptimizedImage = (url) => {
  const target = "/media";
  const index = url.indexOf(target, 14) + target.length;
  const optimizedImageUrl = url.slice(0, index) + "/crop/600/400" + url.slice(index);
  return optimizedImageUrl;
};

export default getOptimizedImage;
