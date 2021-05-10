import styled from 'styled-components';

export const TagsContainer = styled.div`
  display: flex;

  margin-top: 0.5rem;

  img {
    width: 2rem;

    & + img {
      margin-left: 0.5rem;
    }
  }
`;
