/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React from "react";
import { useTypedSelector } from "../../store/store";
import { toast } from "react-hot-toast";

function withAuth(WrappedComponent: any) {
  return function withAuth(props: any) {
    const router = useRouter();
    const { userInfo, loading } = useTypedSelector((state) => state.auth);

    React.useEffect(() => {
      if (!userInfo) {
        router.push("/login");
        toast.error("Your are not login Yet");
      }
    }, [router, userInfo, loading]);

    return <>{userInfo && <WrappedComponent {...props} />};</>;
  };
}
export default withAuth;
