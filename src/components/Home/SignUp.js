import styled from 'styled-components/macro';
import { PrimaryButton } from '../Buttons';
import { COLORS } from '../../constants';

const SignUp = () => {
  return (
    <Wrapper>
      <h1>Keep me posted.</h1>
      <p>Stay tuned for product releases and big announcements.</p>
      <SignUpForm>
        <UserEntry type='text' placeholder='Name' />
        <UserEntry type='text' placeholder='Email' />
        <PrimaryButton type='submit'>Count me in.</PrimaryButton>
      </SignUpForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  text-align: center;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const UserEntry = styled.input`
  display: block;
  text-align: center;
  border: 1px solid ${COLORS.harvestGold};
  border-radius: 3px;
`;

export default SignUp;
