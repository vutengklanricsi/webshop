import styled from 'styled-components/macro';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${'' /* justify-content: center; */}
  text-align: justify;
  margin: 50px 200px;
  padding: 50px;
  font-size: 25px;
	${'' /* background-image: url("") */}
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #503004;
	margin: 0 300px;
	border-radius: 10px;
`;

export const Input = styled.input`
	border-radius: 10px;
  height: 24px;
  width: 350px;
  margin: 10px auto;
  padding: 10px;
	flex-wrap: wrap;
	${'' /* background-color: #B16A33; */}
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  margin: auto auto;
  padding: 10px;
  width: 120px;
	margin-bottom: 50px;
	border-radius: 10px;
	color: white;
	background-color: #B16A33;
  &:hover {
    transition: color 0.5s ease;
    color: #693614;
  }
`;

export const Text = styled.label``;

export const Title = styled.h2`
  margin: 30px;
  text-align: center;
	color: white;
`;

export const Break = styled.br`
  padding: 10px;
`;
