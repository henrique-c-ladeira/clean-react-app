import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadUsers } from '~/domain/usecases/load-users';
import {
  BoxContent,
  Button,
  FallbackWrapper,
  Typography,
} from '~/presentation/components';
import AbsoluteBoxContent from '~/presentation/components/box-content/absolute-box-content';
import usePromiseState from '~/presentation/hooks/usePromiseState';
import { ProjectCard } from './project-card';
import { UserCard } from './user-card';

type UserListProps = {
  loadUsers: LoadUsers;
};

export const UsersList: React.FC<UserListProps> = ({ loadUsers }) => {
  const navigate = useNavigate();

  const {
    data: usersList,
    exec,
    status,
  } = usePromiseState(() => loadUsers.load());

  useEffect(() => {
    exec();
  }, []);

  const logOut = () => {
    navigate('/');
  };

  const renderSuccess = () => (
    <>
      {usersList?.map((user) => (
        <UserCard user={user} />
      ))}
    </>
  );

  return (
    <BoxContent inline justify="center">
      <AbsoluteBoxContent position="sticky" t={0}>
        <BoxContent inline justify="space-between" style={{ width: '100%' }}>
          <Typography variant="heading">Users List</Typography>
          <Button inverted title="Logout" onClick={logOut} />
        </BoxContent>

        <ProjectCard />
        <Button title="a" onClick={exec} />
      </AbsoluteBoxContent>
      <BoxContent
        align="stretch"
        style={{
          marginLeft: 24,
          gap: 8,
        }}
      >
        <FallbackWrapper renderSuccess={renderSuccess} status={status} />
      </BoxContent>
    </BoxContent>
  );
};
