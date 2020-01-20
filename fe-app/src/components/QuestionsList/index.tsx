import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { List, Avatar, Icon, Button } from "antd";

import { State } from "../../reducers";
import { actions as QuestionsListActions } from "../../reducers/questionsList";
import { QuestionListItemData } from "../../types";

const MockData: QuestionListItemData[] = [];

type IconTextProps = { icon: string; text: string };
const IconText: React.FC<IconTextProps> = ({ icon, text }) => (
  <span>
    <Icon type={icon} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const ListFooter: React.FC = () => (
  <div>
    <b>Questions Questions</b>
  </div>
);

type QuestionListItemProps = { item: QuestionListItemData };
const QuestionListItem: React.FC<QuestionListItemProps> = ({ item }) => (
  <List.Item
    key={item.id}
    actions={[
      <IconText icon="star-o" text="99" key="list-vertical-star-o" />,
      <IconText icon="like-o" text="200" key="list-vertical-like-o" />,
      <IconText icon="message-o" text="5" key="list-vertical-message-o" />
    ]}
  >
    <List.Item.Meta
      avatar={<Avatar src={item.authorAvatar} />}
      title={<a href={item.href}>{item.title}</a>}
      description={item.tags}
    />
    {item.description}
  </List.Item>
);

type QuestionListProps = {
  data: QuestionListItemData[];
};
const QuestionList: React.FC<QuestionListProps> = ({ data }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{ onChange: page => console.log(page), pageSize: 3 }}
      dataSource={data}
      footer={<ListFooter />}
      renderItem={(item: QuestionListItemData) => (
        <QuestionListItem item={item} />
      )}
    />
  );
};

type ComponentProps = ConnectedProps<typeof connector>;
const Component: React.FC<ComponentProps> = ({
  questionsList,
  listQuestions
}) => {
  return (
    <div>
      <QuestionList data={questionsList.items} />
      <Button onClick={listQuestions}>Update</Button>
    </div>
  );
};

const mapState = ({ questionsList }: State) => {
  return { questionsList };
};
const mapDispatch = { listQuestions: QuestionsListActions.listQuestions };

const connector = connect(mapState, mapDispatch);

export default connector(Component);
