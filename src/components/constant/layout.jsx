import * as React from 'react'


const Layout = ({children})=>{
    return(
        <>
        
        {/* main section which holds {child} content */}
        <main>{children}</main>
        </>
    )
}


export default Layout