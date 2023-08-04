import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './user/user.reducer';
import { themeReducer } from './theme/theme.reducer';
import { mediaReducer } from './media/media.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  media: mediaReducer
});