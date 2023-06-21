import { useRouter } from 'next/router';
import { useTypedSelector } from '../../store/store';
import { useEffect } from 'react';


const withRole = (WrappedComponent:any, allowedRoles:[string]) => {
  const WrapperComponent = (props:any) => {
    const router = useRouter();
    const {userInfo}:any = useTypedSelector(state => state.auth);
useEffect(()=>{
  // Perform role-based authorization checks
  if(userInfo.role){
    if (!allowedRoles?.includes(userInfo.role)) {
      // Redirect to access denied page or a suitable route
      router.push('/access-denied');
     // or render an alternative component
    }
  }
 

},[router,  userInfo.role])
  
    // Render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return WrapperComponent;
};

export default withRole;
