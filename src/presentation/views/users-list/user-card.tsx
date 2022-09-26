import React from 'react';
import { UserModel } from '~/domain/models/user-model';
import { Typography } from '~/presentation/components';
import { Card } from '~/presentation/components/card/card';

type UserCardProps = {
  user: UserModel;
};

export const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <Card key={`${user.name}${user.imageUrl}`}>
    <Typography variant="bodySmall">{user.name}</Typography>
    <Typography variant="bodyTiny">{user.email}</Typography>
  </Card>
);
