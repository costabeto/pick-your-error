import React, { useCallback, useState } from 'react';
import { Container, SearchBar } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import stackApi from '../../services/stackexchange';
import QuestionItem from '../../components/QuestionItem';

const Home = () => {
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSearch = useCallback(() => {
    const searchObject = {
      intitle: search,
      site: 'stackoverflow',
      page: 1,
      pagesize: 100,
      order: 'desc',
      sort: 'activity',
    };

    stackApi
      .get(`search`, {
        params: searchObject,
      })
      .then((response) => {
        setQuestions(response.data.items);
      });
  }, [search]);

  return (
    <Container>
      <SearchBar>
        <Input
          placeholder='Search for your error...'
          style={{ width: '90%' }}
          onChange={(e) => setSearch(e.target.value)}
          onEnter={() => handleSearch()}
        />
        <Button style={{ width: '10%' }} onClick={() => handleSearch()}>
          Search
        </Button>
      </SearchBar>
      {questions &&
        questions.length > 0 &&
        questions.map((q) => <QuestionItem key={q.question_id} data={q} />)}
    </Container>
  );
};

export default Home;
