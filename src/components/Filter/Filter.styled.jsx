import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-size: 20px;
  width: 400px;
  padding: 10px;
  margin: 0px auto 25px;
  border-radius: 7px;
`;

export const FilterInput = styled.input`
  padding: 10px;
  margin: 10px;
  &:hover,
  &:focus {
    outline: none;
    border-color: #1b0e0e;
    box-shadow: 0px 0px 21px 14px rgba(228, 241, 212, 0.61);
  }
`;
