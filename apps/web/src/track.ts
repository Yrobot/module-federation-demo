export enum Event {
  LOGIN = "login",
  SIGNUP = "signup",
  CLICK = "click",
}

export interface EventData {
  [Event.LOGIN]: {
    id: string;
  };
  [Event.SIGNUP]: {
    email: string;
  };
  [Event.CLICK]: {
    key: string;
  };
}

export const trackEvent = <T extends Event>(
  event: `${T}`,
  data: EventData[T]
) => {
  console.log("trackEvent", event, data);
};
