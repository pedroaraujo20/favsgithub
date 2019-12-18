export function addToFavs(fav) {
  return {
    type: '@favs/ADD',
    fav,
  };
}

export function removeFromFavs(id) {
  return {
    type: '@favs/REMOVE',
    id,
  };
}
