import { ChangeEvent, useContext, useState } from 'react';
import { mapContext } from '../context/mapContext';

interface Props {
    listData: any[];
    listPlace: any[];
}
interface Imap {
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

export default function ListShop({ listData, listPlace }: Props) {
    const { viewPort, setViewPort } = useContext(mapContext);
    const [viewAll, setViewAll] = useState(-1);

    const getProvinces = (e: ChangeEvent<HTMLSelectElement>) => {
        fetchDistrict(parseInt(e.target.value, 10));
        setViewAll(parseInt(e.target.value, 10));
    };

    const [seclectRegion, setSelectRegion] = useState<Imap[]>([]);
    const fetchDistrict = (provincesId: number) => {
        console.log(provincesId);
        const newArr = listData.filter((item) => item.region_id === provincesId);
        setSelectRegion(newArr);
    };

    const handleGetDirections = (longitude: number, latitude: number) => {
        console.log(longitude);
        console.log(latitude);
        setViewPort({
            ...viewPort,
            longitude,
            latitude,
            zoom: 16,
        });
    };

    return (
        <div>
            <h2 className="text-[22px] font-extrabold leading-[25px] text-primary">Hệ thống cửa hàng KIDSPLAZA</h2>
            <p className="text-base text-KPZ_text_1st">Vui lòng chọn vị trí để tìm cửa hàng KIDSPLAZA gần bạn nhất</p>

            <div>
                <select
                    className="outline-none p-4 text-[18px] ml-5 border-solid border-1 rounded-2xl"
                    onChange={getProvinces}
                >
                    <option value={-1}> Tất cả</option>
                    {listPlace.length > 0 &&
                        listPlace.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            );
                        })}
                </select>
                <div className="flex h-[1032px] flex-col gap-4 overflow-auto mt-5">
                    {viewAll < 0 ? (
                        listData.map((item) => {
                            return (
                                <ul className="">
                                    <div key={item.source_code} className=" pb-2 border-b-2 border-solid">
                                        <p className="font-bold text-[#1556B4] text-[18px]">
                                            <span>{item.name}</span>
                                        </p>
                                        <p>
                                            <span className="font-bold pr-1">SĐT:</span>
                                            {item.phone}
                                        </p>
                                        <button
                                            className="text-[#5479BB]"
                                            onClick={() => handleGetDirections(item.latitude, item.longitude)}
                                        >
                                            Nhận chỉ đường
                                        </button>
                                    </div>
                                </ul>
                            );
                        })
                    ) : seclectRegion.length > 0 ? (
                        seclectRegion.map((item) => {
                            return (
                                <ul className="">
                                    <div key={item.source_code} className=" pb-2 border-b-2 border-solid">
                                        <p className="font-bold text-[#1556B4] text-[18px]">
                                            <span>{item.name}</span>
                                        </p>
                                        <p>
                                            <span className="font-bold pr-1">SĐT:</span>
                                            {item.phone}
                                        </p>
                                        <button
                                            className="text-[#5479BB]"
                                            onClick={() => handleGetDirections(item.latitude, item.longitude)}
                                        >
                                            Nhận chỉ đường
                                        </button>
                                    </div>
                                </ul>
                            );
                        })
                    ) : (
                        <div>
                            {' '}
                            <p>Không có cửa hàng nào được tìm thấy</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
