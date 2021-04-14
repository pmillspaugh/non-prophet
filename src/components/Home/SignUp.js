import styled from 'styled-components/macro';
import Spacer from '../Spacer';
import { PrimaryButton } from '../Buttons';
import { COLORS } from '../../constants';

const SignUp = () => {
  return (
    <Wrapper>
      <h1>Keep me posted.</h1>
      <Spacer size='24px' />
      <p>Stay tuned for product releases and big announcements.</p>
      <Spacer size='24px' />
      <SignUpForm>
        <UserEntry type='text' placeholder='Name' />
        <Spacer size='24px' />
        <UserEntry type='text' placeholder='Email' />
        <Spacer size='24px' />
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
  text-align: center;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserEntry = styled.input`
  padding-top: 4px;
  display: block;
  text-align: center;
  border: 1px solid ${COLORS.harvestGold};
  border-radius: 3px;
`;

export default SignUp;
