import { Reducer } from "redux";

import { QuestionListItemData } from "../types";

export const Actions = {
  LIST_QUESTIONS: "LIST_QUESTIONS",
  LIST_QUESTIONS_SUCCESS: "LIST_QUESTIONS_SUCCESS"
};

export const actions = {
  listQuestions: () => {
    return { type: Actions.LIST_QUESTIONS };
  },
  listQuestionsSuccess: (items: listQuestionsSuccessPayload) => {
    return { type: Actions.LIST_QUESTIONS, payload: items };
  }
};

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
  if (action.type == Actions.LIST_QUESTIONS_SUCCESS) {
    return { ...state, ...action.payload };
  }

  return state;
};
