/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import cookie from "js-cookie";
import React, { useEffect } from "react";
import { useTypedSelector } from "../../store/store";

function withAuth(WrappedComponent: any) {
  return function withAuth(props: any) {
    const router = useRouter();
    const { isAuthenticated } = useTypedSelector((state) => state.auth);

    useEffect(() => {
      let isCurrent = true;
      setTimeout(() => {
        if (isCurrent) {
          console.log(isAuthenticated);
          if (!isAuthenticated) {
            console.log(isAuthenticated);
            router.push("/login");
          }
        }
      }, 1000);

      return () => {
        isCurrent = false;
      };
    }, [router, isAuthenticated]);

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
