"use server";

import { defaultSession, sessionOptions } from "@/lib/ironsession";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export const getSession = async () => {
  const session = await getIronSession(await cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  if (!session.isAdminLoggedIn) {
    session.isAdminLoggedIn = defaultSession.isAdminLoggedIn;
  }
  return session;
};

export const getCSRFTokenInSession = async () => {
  const session = await getIronSession(await cookies(), sessionOptions);
  return session?.csrftoken || "";
};
