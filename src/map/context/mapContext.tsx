import { ReactNode, createContext, useEffect, useState } from 'react';
import { fetchAllMap, fetchAllPlace } from '../service/mapService';

export interface Imap {
    source_code: number;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    region_id: number;
    district_id: number;
    street: string;
    phone: string | null;
    store_image: string | null;
    is_new: number;
    is_coming_soon: number;
}

export interface Iplace {
    code: string;
    id: number;
    name: string;
}

interface ImapContext {
    mapData: Imap[];
    mapPlace: Iplace[];
}

export const mapContext = createContext<ImapContext>({
    mapData: [],
    mapPlace: [],
});

interface Props {
    children: ReactNode; // reactNode là 1 kiểu dữ liệu rộng lớn nó có thể bao gồm tất cả như mảng, chuỗi, components, các fragment
}

export const MapContextProvider: React.FC<Props> = ({ children }) => {
    const [mapData, setMapData] = useState<Imap[]>([]);
    const [mapPlace, setMapPlace] = useState<Iplace[]>([]);

    //get mapdata vd: toạ độ, thông tin
    useEffect(() => {
        getAllMapData();
    }, []);

    const getAllMapData = async () => {
        const getMapData = await fetchAllMap();
        if (getMapData) {
            setMapData(getMapData.data);
        }
    };

    //getplace vd: tỉnh thành, id
    useEffect(() => {
        getAllPlace();
    }, []);

    const getAllPlace = async () => {
        const getPlace = await fetchAllPlace();
        if (getPlace) {
            setMapPlace(getPlace.data);
        }
    };

    //lọc theo thỉnh thành

    const getDataByIds = (id: number) => {
        const placeID = setMapPlace(mapPlace.filter(item=> item.id === id));
        
    };

    const mapContextData = {
        mapData,
        mapPlace,
    };
    return <mapContext.Provider value={mapContextData}>{children}</mapContext.Provider>;
};
