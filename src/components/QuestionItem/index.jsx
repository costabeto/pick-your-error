import React, { useMemo, useState } from 'react';
import {
  Container,
  Item,
  Label,
  Value,
  ProfileImg,
  ProfileLink,
  Username,
  ActionButton,
  ExternalLinkIcon,
  FavoriteIcon,
  HeaderLinkContainer,
} from './styles';

const QuestionItem = ({ data }) => {
  const [favorited, setFavorited] = useState(false);

  const question = useMemo(() => {
    const {
      title,
      content_license,
      creation_date,
      last_activity_date,
      score,
      answer_count,
      owner,
      link,
      tags,
      view_count,
      is_answered,
      question_id,
    } = data;

    const questionObject = {
      title,
      license: content_license,
      created: new Date(creation_date).toLocaleString('pt-BR'),
      last_activity: new Date(last_activity_date).toLocaleString('pt-BR'),
      score,
      answer_count,
      user: {
        name: owner.display_name,
        link: owner.link,
        img: owner.profile_image,
      },
      link,
      tags: tags.join(' - '),
      views: view_count,
      is_answered,
      question_id,
    };

    const localFavorites = JSON.parse(localStorage.getItem('@pye:favorites'));

    if (localFavorites) {
      const isFavorited =
        localFavorites.filter((f) => f.question_id === question_id).length ===
        1;

      if (isFavorited) {
        setFavorited(true);
      }
    }

    return questionObject;
  }, [data]);

  function handleFavorite() {
    const localFavorites = JSON.parse(localStorage.getItem('@pye:favorites'));

    if (!localFavorites) {
      const newFavorites = [data];
      localStorage.setItem('@pye:favorites', JSON.stringify(newFavorites));
      setFavorited(true);
    } else {
      if (favorited) {
        const newFavorites = localFavorites.filter(
          (f) => f.question_id !== question.question_id
        );

        if (newFavorites.length === 0) {
          localStorage.removeItem('@pye:favorites');
        } else {
          localStorage.setItem('@pye:favorites', JSON.stringify(newFavorites));
        }
        setFavorited(false);
      } else {
        const newFavorites = [...localFavorites, data];
        localStorage.setItem('@pye:favorites', JSON.stringify(newFavorites));
        setFavorited(true);
      }
    }
  }

  return (
    <Container>
      <HeaderLinkContainer>
        <ActionButton onClick={() => handleFavorite()}>
          <FavoriteIcon favorited={favorited} />
        </ActionButton>
        <ActionButton onClick={() => window.open(question.link)}>
          <ExternalLinkIcon />
        </ActionButton>
      </HeaderLinkContainer>
      <Item>
        <Label>Author</Label>
        <ProfileLink href={question.user.link}>
          <ProfileImg src={question.user.img} alt={question.user.name} />
          <Username style={{ textTransform: 'uppercase' }}>
            {question.user.name}
          </Username>
        </ProfileLink>
      </Item>
      <Item>
        <Label>Title</Label>
        <Value>{question.title}</Value>
      </Item>
      <Item>
        <Label>Score</Label>
        <Value>{question.score}</Value>
      </Item>
      <Item>
        <Label>Answers</Label>
        <Value>{question.answer_count}</Value>
      </Item>
      <Item>
        <Label>Views</Label>
        <Value>{question.views}</Value>
      </Item>
      <Item>
        <Label>Created</Label>
        <Value>{question.created}</Value>
      </Item>
      <Item>
        <Label>Last Activity</Label>
        <Value>{question.last_activity}</Value>
      </Item>
      {question.tags && (
        <Item>
          <Label>Tags</Label>
          <Value>{question.tags}</Value>
        </Item>
      )}
    </Container>
  );
};

export default QuestionItem;
