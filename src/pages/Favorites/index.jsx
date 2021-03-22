import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import QuestionItem from '../../components/QuestionItem';

const Favorites = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const localFavorites = JSON.parse(localStorage.getItem('@pye:favorites'));

    setQuestions(localFavorites);
  }, []);

  return (
    <Container>
      {questions &&
        questions.length > 0 &&
        questions.map((q) => <QuestionItem key={q.question_id} data={q} />)}
    </Container>
  );
};

export default Favorites;
