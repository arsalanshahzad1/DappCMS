import { createContext, useState } from "react";

const MyContext = createContext()

const GlobalProvider = ({ children }) => {

    const [sideBarExpand, setsideBarExpand] = useState(true)
    const handleSidebarToggle = () => {
        setsideBarExpand(!setsideBarExpand)
        console.log(sideBarExpand, "sidebar expanded")
    }

    const state = { sideBarExpand, setsideBarExpand }

    return (
        <MyContext.Provider value={state}>
            {children}
        </MyContext.Provider>
    )
}
export { MyContext, GlobalProvider };