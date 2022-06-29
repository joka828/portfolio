import Router from "next/router";
import { useEffect } from "react"

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}

export default () => {
  // useEffect(() => {
  //   Router.push('/');
  // });

  return null;
}