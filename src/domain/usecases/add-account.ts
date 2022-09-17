export type AddAccountParams = {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: Date;
};

export interface AddAccount {
  add: (params: AddAccountParams) => Promise<void>;
}
