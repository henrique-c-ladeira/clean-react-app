export interface SaveAccessToken {
  save(accessToken: SaveAccessToken.Params): Promise<void>;
}

export namespace SaveAccessToken {
  export type Params = string;
}
