export const getImageURL = (url, size = 'w780') => `https://image.tmdb.org/t/p/${size}${url}`;
export const colorFromString = (str) => `#${Array.from('Romance').map(c => c.charCodeAt(0)).reduce((p, n) => 2 * (p + n)).toString(16).repeat(2).slice(0, 6)}`;
