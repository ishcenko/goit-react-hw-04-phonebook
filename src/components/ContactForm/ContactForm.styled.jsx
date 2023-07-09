import styled from '@emotion/styled';

export const ContactForm = styled.form`
  padding: 15px;
`;

export const FormLabel = styled.label`
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

export const FormInput = styled.input`
  border: 1px solid rgba(237, 145, 145, 0.392);
  border-radius: 4px;
  height: 37px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  cursor: pointer;
  background: linear-gradient(45deg, rgb(245, 214, 121), rgb(243, 150, 122));
  align-items: center;
`;

export const SubmitButton = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background: rgb(235, 244, 106);
  border: none;
  border-radius: 20px;
  width: 150px;
  margin: 30px auto 50px;
  align-items: center;
  justify-content: center;
  color: rgb(232, 12, 12);
  cursor: pointer;
  padding: 10px 20px;
  transition: all 1000ms ease 0s;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    border-color: #ff0000;
    box-shadow: 0px 0px 21px 14px rgba(144, 247, 10, 0.61);
    background: #0ef50e;
  }
`;
