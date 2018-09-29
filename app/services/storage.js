const storageService = localStorage ? {
  initialize: () => {
    return localStorage.items || (localStorage.items = "[]");
  },
  favoriteItem: id => {
    if(!storageService.isFavorited(id)) {
      const items = JSON.parse(localStorage.items);

      items.push(id);

      return localStorage.items = JSON.stringify(items);
    }
    return false;
  },
  unFavoriteItem: id => {
    if(storageService.isFavorited(id)) {
      const items = JSON.parse(localStorage.items);

      const result = items.filter(item => item !== id);

      return localStorage.items = JSON.stringify(result);
    }
    return false;
  },
  isFavorited: id => {
    const items = JSON.parse(localStorage.items);

    return !!items.find(item => item === id);
  }
} : null

export default storageService;
