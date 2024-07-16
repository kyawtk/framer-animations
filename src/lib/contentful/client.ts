import { createClient } from "contentful";

export const contentClient = createClient({
  space: process.env.CONTENTFULSPACEID,
  accessToken: process.env.CONTENTFULACCESSTOKEN,
});
