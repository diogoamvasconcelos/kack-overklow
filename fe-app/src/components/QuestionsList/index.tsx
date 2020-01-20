import React from "react";
import { List, Avatar, Icon } from "antd";

type QuestionListItemData = {
  id: string;
  href: string;
  title: string;
  tags: string;
  description: string;
  author: string;
  authorAvatar: string;
};

const MockData: QuestionListItemData[] = [
  {
    id: "0",
    href: "diogovasconcelos.com",
    title: "Question 1",
    tags: "Typescript",
    description: "Very nice question",
    author: "Diogo",
    authorAvatar:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  }
];

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

const Component: React.FC = () => {
  return <QuestionList data={MockData} />;
};

export default Component;
