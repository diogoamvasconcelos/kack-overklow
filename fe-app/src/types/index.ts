import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { State } from "../reducers";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  null,
  Action<string>
>;

export type QuestionListItemData = {
  id: string;
  href: string;
  title: string;
  tags: string;
  description: string;
  author: string;
  authorAvatar: string;
};
