import React, { useState } from 'react';
import { Container, Card, Item, Button, List } from 'semantic-ui-react'

import './App.css';
import {
  SearchkitManager,
  SearchkitProvider,
  SearchBox,
  Hits,
  MatchQuery,
  RefinementListFilter,
  Tabs,
  TagCloud
} from "searchkit";
const ReactMarkdown = require('react-markdown')

const searchkit = new SearchkitManager("http://localhost:9200/posts3")


function queryBuilder(query, options) {
  return MatchQuery("text", query, { fuzziness: "AUTO" })
}

function fixText(text) {
  return text
}

function HitItem(props) {
  const topic = props.hit._source.topic
  const [fullView, setFullView] = useState(false)
  const text = fullView ? fixText(props.hit._source.text) : fixText(props.hit.highlight?.text?.join("") || props.hit._source.text)
  return (
    <Item key={props.hit._id}>
      <Item.Content>
        <Item.Header>
          <Button onClick={(ev) => setFullView(!fullView)}>{topic}</Button>
        </Item.Header>
        <Item.Description>
          <ReactMarkdown source={text} escapeHtml={false} />
        </Item.Description>
      </Item.Content>
    </Item>
  )
}

const HitItemList = (props) => {
  const { hits } = props
  return (
    <Item.Group divided>
      {hits.map(hit => <HitItem hit={hit} />)}
    </Item.Group>
  )
}


function App() {
  return (
    <SearchkitProvider searchkit={searchkit}>
      <Container>
        <SearchBox queryBuilder={queryBuilder} searchOnChange={true} />
        <RefinementListFilter id="tags" title="Tags" field="tags" operator="OR" listComponent={TagCloud} />
        <Hits highlightFields={["text"]} listComponent={HitItemList} />
      </Container>
    </SearchkitProvider>
  );
}



export default App;
