import { v4 as uuid } from "uuid";

export const amplitudeTracking = (event: any) => {
  if (process.env.NODE_ENV === "development") {
    return;
  }
  const user_id = window.localStorage.getItem("userId");
  fetch("https://api.amplitude.com/2/httpapi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: process.env.NEXT_PUBLIC_AMPLITUDE_KEY,
      events: [{ ...event, user_id }],
    }),
  });
};

export const linkedinLinkTracking = () => {
  amplitudeTracking({
    event_type: "open_linkedin_profile",
  });
};

export const githubLinkTracking = () => {
  amplitudeTracking({
    event_type: "open_github_profile",
  });
};

export const visitTracking = (route: string) => {
  amplitudeTracking({
    event_type: "visited_site",
    event_properties: {
      route,
    },
  });
};

export const openProjectDetailTracking = (projectName: string) => () => {
  amplitudeTracking({
    event_type: "open_project_detail",
    event_properties: {
      projectName,
    },
  });
};

export const downloadCVTracking = () => {
  amplitudeTracking({
    event_type: "download_cv",
  });
};

export const initiliazeUserId = () => {
  if (typeof window !== "undefined") {
    const userId = window.localStorage.getItem("userId");
    if (!userId) {
      window.localStorage.setItem("userId", uuid());
    }
  }
};
