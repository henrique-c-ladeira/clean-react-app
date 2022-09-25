import { LoadUsers } from '~/domain/usecases/load-users';
import { render, waitFor } from '~/shared/tests-utils';
import { UsersList } from './users-list';

jest.mock('react-router-dom', () => ({ useNavigate: jest.fn() }));

class LoadUsersSpy implements LoadUsers {
  async load() {
    return null as unknown as LoadUsers.Return;
  }
}

const makeSut = () => {
  const sut = render(<UsersList loadUsers={new LoadUsersSpy()} />);
  return { sut };
};

describe('Users List', () => {
  it('should render title', async () => {
    const { sut } = makeSut();

    await waitFor(() => {
      expect(sut.getByText(/Users List/));
    });
  });
});
