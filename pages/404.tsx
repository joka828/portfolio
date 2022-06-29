import Router from "next/router";
import { useEffect } from "react"

export default () => {
  // Looks like nextJS doesn't support anything better regarding SEO than this :/
  useEffect(() => {
    Router.push('/');
  }, []);

  return null;
}