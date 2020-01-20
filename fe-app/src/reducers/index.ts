import { combineReducers } from "redux";

import { reducer as questionsList } from "./questionsList";

export const reducer = combineReducers({
  questionsList
});

export type State = Readonly<ReturnType<typeof reducer>>;
