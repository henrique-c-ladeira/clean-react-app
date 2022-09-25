import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadUsers } from '~/domain/usecases/load-users';
import { BoxContent, Button, Typography } from '~/presentation/components';
import { Card } from '~/presentation/components/card/card';
import usePromiseState from '~/presentation/hooks/usePromiseState';
import { ProjectCard } from './project-card';

type UserListProps = {
  loadUsers: LoadUsers;
};

export const UsersList: React.FC<UserListProps> = ({ loadUsers }) => {
  const navigate = useNavigate();

  const { data: usersList, exec } = usePromiseState(() => loadUsers.load());

  useEffect(() => {
    exec();
  }, []);

  const logOut = () => {
    navigate('/');
  };

  return (
    <BoxContent inline style={{ justifyContent: 'center' }}>
      <BoxContent style={{ position: 'sticky', top: 0 }}>
        <BoxContent
          inline
          style={{ justifyContent: 'space-between', width: '100%' }}
        >
          <Typography variant="heading">Users List</Typography>
          <Button inverted title="Logout" onClick={logOut} />
        </BoxContent>

        <ProjectCard />
      </BoxContent>

      <BoxContent
        style={{
          alignItems: 'stretch',
          marginLeft: 24,
          gap: 8,
        }}
      >
        {usersList?.map((item) => (
          <Card key={`${item.name}${item.imageUrl}`}>
            <Typography variant="bodySmall">{item.name}</Typography>
            <Typography variant="bodyTiny">{item.email}</Typography>
          </Card>
        ))}
      </BoxContent>
    </BoxContent>
  );
};
