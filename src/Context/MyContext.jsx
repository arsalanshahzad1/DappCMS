import { createContext, useEffect, useState } from "react";
import apis from "../Services";


export const MyContext = createContext()

export const GlobalProvider = ({ children }) => {

const [sideBarExpand, setsideBarExpand] = useState(true)



    const [contractOrder, setContractOrder] = useState([]);
    
    const getContractOrder = async () => {
      const response = await apis.getAllSecondContracOrder();
    //   console.log("response", response);
      if (response?.data?.status) {
        setContractOrder(response?.data?.order);
      }
    };
  

    const [contractProduct, setContractProduct] = useState([]);

    const getproducts = async () => {
        const response = await apis.getAllSecondContracProduct();
        if (response?.data?.status) {
            setContractProduct(response?.data?.product);
        }
    }


    const [user, setUser] = useState([])

    const getUsers = async () => {
        const response = await apis.getAllUser();
        if(response?.data?.status){
            setUser(response?.data?.user)
        }
    }

    const [quantitativeProduct, setQuantitativeProduct] = useState([])

    const getQuantitativeProduct = async () => {

        const response = await apis.getAllQuantitativeProduct();
        // console.log("response", response);
        if (response?.data?.status) {
            setQuantitativeProduct(response?.data?.product);
        }
    }


    const [miningProduct, setMiningProduct] = useState([])

    const getMiningProductProduct = async () => {

        const response = await apis.getAllMiningProduct();
        // console.log("response", response);
        if (response?.data?.status) {
            setMiningProduct(response?.data?.mining);
        }
    }


    const [quantitativeOrder, setQuantitativeOrder] = useState([])

    const getQuantitativeOrder = async () => {
        const response = await apis.getAllQuantitativeOrder();
        // console.log("response", response);
        if (response?.data?.status) {
            setQuantitativeOrder(response?.data?.order);
        }
    }


    const [miningOrder, setMiningOrder] = useState([])

    const getMiningOders = async () => {
        const response = await apis.getAllMiningOders();
        console.log("response", response);
        if (response?.data?.status) {
            setMiningOrder(response?.data?.order);
        }
    }

    const [alluserWallets, setAllUserWallet] = useState([])

    const getAllUserWallet = async () => {
        const response = await apis.getAllUserWallets();
        console.log("response", response);
        if (response?.data?.status) {
            setAllUserWallet(response?.data?.wallet);
        }
    }




    useEffect(() => {
        getMiningOders();
        getQuantitativeOrder();
        getQuantitativeProduct();
        getproducts();
        getContractOrder();
        getUsers();
        getMiningProductProduct();
        getAllUserWallet()
    }, [])






const state = { sideBarExpand, setsideBarExpand, contractProduct, getproducts, contractOrder, user, quantitativeProduct,getQuantitativeProduct,miningProduct,
    getMiningProductProduct,quantitativeOrder,miningOrder,getMiningOders,alluserWallets,getAllUserWallet}
    return (
        <MyContext.Provider value={state}>
            {children}
        </MyContext.Provider>
    )
}
