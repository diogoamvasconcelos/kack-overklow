import { Reducer } from "redux";

import { AppThunk, QuestionListItemData } from "../types";

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
  listQuestions: () => (): AppThunk => async dispatch => {
    console.log("I will wait now");
    const asyncResp = await exampleAsync();
    console.log("I waited on listQUestions");
    dispatch(
      syncActions.listQuestionsSuccess({
        items: [{ ...initialState[0], title: asyncResp }]
      })
    );
  }
};

const exampleAsync = () => {
  return Promise.resolve("Async lala");
};

export const actions = { ...syncActions, ...asyncActions };

type listQuestionsSuccessPayload = { items: QuestionListItemData[] };
export type State = listQuestionsSuccessPayload;

const initialState: State = {
  items: [
    {
      id: "0",
      href: "diogovasconcelos.com",
      title: "Question 1",
      tags: "Typescript",
      description: "Very nice question",
      author: "Diogo",
      authorAvatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
      id: "1",
      href: "diogovasconcelos.com",
      title: "Question 2",
      tags: "Typescript",
      description: "Very nice question too",
      author: "Dio",
      authorAvatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    }
  ]
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
