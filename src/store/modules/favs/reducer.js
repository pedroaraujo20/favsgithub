import produce from 'immer';
import { Alert } from 'react-native';

export default function favs(state = [], action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@favs/ADD': {
        const { fav } = action;
        const favIndex = draft.findIndex(f => f.id === fav.id);

        if (favIndex >= 0) {
          Alert.alert('It is already in your favorites!');
          return;
        }

        draft.push(fav);
        Alert.alert('Added to Favorites!');
        break;
      }
      case '@favs/REMOVE': {
        const favIndex = draft.findIndex(f => f.id === action.id);

        if (favIndex >= 0) draft.splice(favIndex, 1);
        break;
      }
      default:
    }
  });
}
