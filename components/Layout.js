import Meta from "./Meta"
import Message from "./Message"


const Layout = ({children})=>{
    return(
        <>
            <Meta></Meta>
            {children}
            <Message></Message>
        </>
    )
}

export default Layout