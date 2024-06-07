import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { initalState } from '../reducer/useReducer';
import { fetchAllUser } from '../service/userService';

interface IUser {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
}

interface IUserContext {
    getUserData: IUser[];
    isOpenAddModal: boolean;
    handleOpenAdd: () => void;
    hanleClodseAdd: () => void;
}

export const userContext = createContext<IUserContext>({
    getUserData: [],
    isOpenAddModal: false,
    handleOpenAdd: () => {},
    hanleClodseAdd: () => {},
});

interface Props {
    children: ReactNode; // reactNode là 1 kiểu dữ liệu rộng lớn nó có thể bao gồm tất cả như mảng, chuỗi, components, các fragment
}
const UserContextProvider: React.FC<Props> = ({ children }) => {
    // lấy data từ api, add user
    const [getUserData, setGetUserData] = useState<IUser[]>([]);

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        const getData = await fetchAllUser(); //await là 1 promise. Vì phải đợi có dữ liệu thì mới show ra màng hình được
        if (getData && getData.data) {
            setGetUserData(getData.data.data);
        }
    };

    //open modal add new user
    const [isOpenAddModal, setIsOpenAddModal] = useState(false);

    const handleOpenAdd = () => {
        setIsOpenAddModal(true);
    };

    const hanleClodseAdd = () => {
        setIsOpenAddModal(false);
    };

    const userContextData = {
        getUserData,
        isOpenAddModal,
        handleOpenAdd,
        hanleClodseAdd,
    };
    return <userContext.Provider value={userContextData}>{children}</userContext.Provider>;
};

export default UserContextProvider;
