import Router from "next/router";
import { useEffect } from "react"

const NotFoundRedirect = () => {
  // Looks like nextJS doesn't support anything better regarding SEO than this :/
  useEffect(() => {
    Router.push('/');
  }, []);

  return null;
}

export default NotFoundRedirect;