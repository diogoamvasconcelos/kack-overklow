import { Reducer } from "redux";

import { AppThunk, QuestionListItemData } from "../types";
import { fetchy } from "../utils/fetch";

export const Actions = {
  LIST_QUESTIONS: "LIST_QUESTIONS",
  LIST_QUESTIONS_SUCCESS: "LIST_QUESTIONS_SUCCESS"
};

const syncActions = {
  listQuestionsSuccess: (items: listQuestionsSuccessPayload) => {
    return { type: Actions.LIST_QUESTIONS_SUCCESS, payload: items };
  }
};

const asyncActions = {
  listQuestions: (): AppThunk => async dispatch => {
    const asyncResp = await fetchy("questions").then(res => res.json());
    dispatch(syncActions.listQuestionsSuccess(asyncResp));
  }
};

export const actions = { ...syncActions, ...asyncActions };

type listQuestionsSuccessPayload = { items: QuestionListItemData[] };
export type State = listQuestionsSuccessPayload;

const initialState: State = {
  items: []
};

export const reducer: Reducer<State> = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case Actions.LIST_QUESTIONS_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
