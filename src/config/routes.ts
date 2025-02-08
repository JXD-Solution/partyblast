export enum Route {
  partyList = "party-list",
}

export const allRoutes = {
  platform: {
    partyList: {
      createEvent: "/platform/party-list/create-event",
      editEvent: "/platform/party-list/edit-event",
    },
    eventManagement: "/platform/event-management",
  },
};

export const getAllRoutes = () => {
  return allRoutes;
};

export type Path = {
  path: Route;
  text: string;
};

export const routes: Path[] = [
  {
    path: Route.partyList,
    text: "Party List",
  },
];
