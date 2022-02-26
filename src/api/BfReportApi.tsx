import JsonClient from "./Json";

type user = {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
  email: string;
  displayName: string;
};

export class ApiProvider extends JsonClient {
  public user: user = {
    id: "",
    name: "",
    avatar: "",
    createdAt: "",
    email: "",
    displayName: "",
  };

  constructor() {
    super({
      dev: "https://localhost:5051",
      gametoolsdev: "https://localtest.me:5051",
      prod: "https://api.bfreport.com",
    });
  }

  async logoutAndChangeUser() {
    await this.fetchMethod("/auth/logout", {});
    const user = await this.getUserInfo();
    return user;
  }

  async getUserInfo(): Promise<user> {
    const defaultUser: user = {
      id: "",
      name: "",
      avatar: undefined,
      createdAt: "",
      email: "",
      displayName: "",
    };

    return this.getJsonMethod("/auth/current", {}).then(
      (user: user) => user,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (_error) => defaultUser,
    );
  }
}

export const BfReportApi = new ApiProvider();
