import JsonClient from "./Json";
import {
  PlatoonStats,
  MainStats,
  ServerSearch,
  DetailedServerInfo,
  PlatoonSearchResult,
  ServerPlayersReturn,
} from "./GametoolsReturnTypes";

interface PlayerInfo {
  game: string;
  type: string;
  getter: string;
  userName: string;
  lang: string;
  platform?: string;
}

interface PlatoonSearch {
  name: string;
  platform: string;
  lang: string;
}

interface PlatoonInfo {
  id: string;
  platform: string;
  lang: string;
}

interface ServerInfo {
  game: string;
  getter: string;
  serverName: string;
  lang: string;
  region?: string;
  platform?: string;
}

interface serverPlayerlist {
  game: string;
  gameId: string;
}

interface ServerSearchInfo {
  game: string;
  searchTerm: string;
  lang: string;
  searchType?: string;
  region?: string;
  platform?: string;
  limit?: string;
}

export class ApiProvider extends JsonClient {
  constructor() {
    super({
      dev: "https://api.gametools.network",
      gametoolsdev: "http://localhost:8787",
      prod: "https://api.gametools.network",
    });
  }

  async stats({
    game,
    type,
    getter,
    userName,
    lang,
    platform = "pc",
  }: PlayerInfo): Promise<MainStats> {
    if (getter == "playerid") {
      return await this.getJsonMethod(`/${game}/${type}/`, {
        playerid: userName,
        lang: lang,
        platform: platform,
      });
    }
    return await this.getJsonMethod(`/${game}/${type}/`, {
      name: encodeURIComponent(userName),
      lang: lang,
      platform: platform,
    });
  }

  async platoonSearch({
    name,
    platform,
    lang,
  }: PlatoonSearch): Promise<PlatoonSearchResult> {
    return await this.getJsonMethod(`/bfglobal/platoons/`, {
      name: name,
      platform: platform,
      lang: lang,
    });
  }

  async platoon({ id, platform, lang }: PlatoonInfo): Promise<PlatoonStats> {
    return await this.getJsonMethod(`/bfglobal/detailedplatoon/`, {
      id: id,
      platform: platform,
      lang: lang,
    });
  }

  async server({
    game,
    getter,
    serverName,
    lang,
    region = "all",
    platform = "pc",
  }: ServerInfo): Promise<DetailedServerInfo> {
    const gameStuff = game.split(".");
    if (platform == "all") {
      platform = "pc";
    }
    if ((getter == "gameid" || getter == "serverid") && game == "bf2042") {
      return await this.getJsonMethod(`/${gameStuff[0]}/detailedserver/`, {
        serverid: serverName,
        lang: lang,
        region: region,
        platform: platform,
        service: gameStuff[1],
      });
    } else if (getter == "gameid") {
      return await this.getJsonMethod(`/${gameStuff[0]}/detailedserver/`, {
        gameid: serverName,
        lang: lang,
        region: region,
        platform: platform,
        service: gameStuff[1],
      });
    }
    return await this.getJsonMethod(`/${gameStuff[0]}/detailedserver/`, {
      name: encodeURIComponent(serverName),
      lang: lang,
      region: region,
      platform: platform,
      service: gameStuff[1],
    });
  }

  async serverPlayerlist({
    game,
    gameId,
  }: serverPlayerlist): Promise<ServerPlayersReturn> {
    const gameStuff = game.split(".");
    if (game === "bf2042") {
      return await this.getJsonMethod(`/${gameStuff[0]}/players/`, {
        blazegameid: gameId,
      });
    }
    return await this.getJsonMethod(`/${gameStuff[0]}/players/`, {
      gameId: gameId,
    });
  }

  async serverSearch({
    game,
    searchTerm,
    lang,
    searchType = "servername",
    region = "all",
    platform = "pc",
    limit = "10",
  }: ServerSearchInfo): Promise<ServerSearch> {
    const gameStuff = game.split(".");
    let serverName = "";
    let experienceName = "";
    if (platform == "all") {
      platform = "pc";
    }
    if (searchType === "experiencename") {
      experienceName = searchTerm;
    } else {
      serverName = searchTerm;
    }
    return await this.getJsonMethod(`/${gameStuff[0]}/servers/`, {
      name: encodeURIComponent(serverName),
      experiencename: encodeURIComponent(experienceName),
      lang: lang,
      region: region,
      platform: platform,
      service: gameStuff[1],
      limit: limit,
    });
  }
}

export const GametoolsApi = new ApiProvider();
