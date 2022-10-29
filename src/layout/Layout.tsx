import React from 'react'
import Header from '../components/AppBar/Header'
import MobileHeader from '../components/AppBar/MobileHeader'
import Footer from '../components/Footer'


interface IProps{
    children:React.ReactNode | React.ReactNode[];
}

const Layout:React.FC<IProps> = (props)=> {
  return (
    <div className="">
    <Header />
 <MobileHeader/>

 <div className=" m-auto max-w-[1532px] px-8  space-y-8">
    {props.children}
 </div>
<Footer/>
</div>
  )
}

export default Layout