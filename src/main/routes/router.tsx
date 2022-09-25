import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RemoteLoadUsers } from '~/data/usecases/load-users/remote-load-users';
import { AxiosGetHttpAdapter } from '~/infra/http/axios-get-http-adapter/axios-get-http-adapter';
import { LocalStorageAdapter } from '~/infra/storage/local-storage-adapter';
import { MakeLogin } from '~/main/factories/views/login/login-factory';
import { MakeSignUp } from '~/main/factories/views/sign-up/sign-up-factory';
import { UsersList } from '~/presentation/views/users-list/users-list';
import { AuthorizeHttpGetClientDecorator } from '../decorators/authorize-http-get-client-decorator/authorize-http-get-client-decorator';
import { makeApirUrl } from '../factories/http';

const MakeUsersList = () => (
  <UsersList
    loadUsers={
      new RemoteLoadUsers(
        makeApirUrl('/users'),
        new AuthorizeHttpGetClientDecorator(
          new AxiosGetHttpAdapter(),
          new LocalStorageAdapter()
        )
      )
    }
  />
);

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MakeLogin />} />
      <Route path="/signup" element={<MakeSignUp />} />
      <Route path="/users-list" element={<MakeUsersList />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
