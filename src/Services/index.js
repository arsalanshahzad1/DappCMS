import axios from "axios";



const createBackendServer = (baseURL) => {
    const api = axios.create({
        baseURL: `${baseURL}/api/`,
        withCredentials: false,
        headers: {
            Accept: "application/json"
        },
        timeout: 60 * 1000,
    });


    //Interceptor
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            const message = error?.response?.data?.message;
            error.message = message ?? error.message
            if (error?.response?.data?.errors)
                error.errors = error?.response?.data?.errors;
            return Promise.reject(error)
        })

    const headers = {
        "Content-Type": "multipart/form-data",
    };

    //QuantitativeProduct
    const getAllQuantitativeProduct = async () => await api.get(`admin/quantitative-product`);
    const getOneQuantitativeProduct = async (body) => await api.get(`admin/quantitative-product/${body}`)
    const createQuantitativeProduct = async (body) => await api.post(`admin/quantitative-product`, body)
    const UpdateQuantitativeProduct = async (prams, body) => await api.put(`admin/quantitative-product/${prams}`, body)
    const getSearchedQuantitativeProduct = async (body) => await api.post(`admin/quantitative-search`,body)

    //QuantitativeOrder
    const getAllQuantitativeOrder = async () => await api.get(`admin/quantitative-order`);
    const getOneQuantitativeOrder = async (body) => await api.get(`admin/quantitative-order/${body}`)
    const createQuantitativeOrder = async (body) => await api.post(`admin/quantitative-order`, body)
    const UpdateQuantitativeOrder = async (prams, body) => await api.put(`admin/quantitative-order/${prams}`, body)
    const getSearchedQuantitativeOrder = async (body) => await api.post(`admin/quantitative-order-search`,body)
    
   

    //MiningProduct 
    const getAllMiningProduct = async () => await api.get(`admin/mining-product`);
    const getOneMiningProduct = async (body) => await api.get(`admin/mining-product/${body}`)
    const createMiningProduct = async (body) => await api.post(`admin/mining-product`, body)
    const UpdateMiningProduct = async (prams, body) => await api.put(`admin/mining-product/${prams}`, body)
    const getSearchedMiningProduct = async (body) => await api.post(`admin/mining-product-search`,body)

    //MiningOrder
    const getAllMiningOders = async () => await api.get(`admin/mining-order`);
    const getOneMiningOrder = async (body) => await api.get(`admin/mining-order/${body}`)
    const createMiningOrder = async (body) => await api.post(`admin/mining-order`, body)
    const UpdateMiningOrder = async (prams, body) => await api.put(`admin/mining-order/${prams}`, body)
    const getSearchedMiningOrder = async (body) => await api.post(`admin/mining-order-search`,body)

    //SecondContractProduct
    const getAllSecondContracProduct = async () => await api.get(`admin/contract-product`);
    const getOneSecondContracProduct = async (body) => await api.get(`admin/contract-product/${body}`)
    const createSecondContracProduct = async (body) => await api.post(`admin/contract-product`, body)
    const UpdateSecondContracProduct = async (prams, body) => await api.put(`admin/contract-product/${prams}`, body)
    const getContractDetails = async (body, type) => await api.get(`coins-details${body}?type=${type}`);
    const getSearchedContract = async (body) => await api.post(`admin/contract-order-search`,body)
    
    //secondContractOrder
    const getAllSecondContracOrder = async () => await api.get(`admin/contract-order`);
    const getOneSecondContracOrder = async (body) => await api.get(`admin/contract-order/${body}`)
    const createSecondContracOrder = async (body) => await api.post(`admin/contract-order`, body)
    const UpdateSecondContracOrder = async (prams, body) => await api.put(`contract/update/${prams}`, body)


    //User
    const createUser = async (body) => await api.post(`user`, body);
    const getUserWallet = async (body) => await api.get(`user/wallet/${body}`);
    const getAllUser = async () => await api.get(`admin/user`);
    const getOneUser = async (body) => await api.get(`user/${body}`);
    const getAllUserWallets = async () => await api.get(`admin/user/wallet`);
    const updateUserWallet = async (body) => await api.put(`admin/user/wallet`, body);







    //Returning all the API
    return {
        getAllQuantitativeProduct,
        getOneQuantitativeProduct,
        createQuantitativeProduct,
        UpdateQuantitativeProduct,
        getSearchedQuantitativeProduct,

        getAllQuantitativeOrder,
        getOneQuantitativeOrder,
        createQuantitativeOrder,
        UpdateQuantitativeOrder,
        getSearchedQuantitativeOrder,


        getAllMiningProduct,
        getOneMiningProduct,
        createMiningProduct,
        UpdateMiningProduct,
        getSearchedMiningProduct,

        getAllMiningOders,
        getOneMiningOrder,
        createMiningOrder,
        UpdateMiningOrder,
        getSearchedMiningOrder,


        getAllSecondContracProduct,
        getOneSecondContracProduct,
        createSecondContracProduct,
        UpdateSecondContracProduct,
        getContractDetails,

        getAllSecondContracOrder,
        getOneSecondContracOrder,
        createSecondContracOrder,
        UpdateSecondContracOrder,
        getSearchedContract,

        createUser,
        getAllUser,
        getUserWallet,
        getOneUser,
        getAllUserWallets,
        updateUserWallet,

    };
};

const apis = createBackendServer("http://localhost:5000");

export default apis;