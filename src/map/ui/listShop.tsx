import React, { useContext } from 'react';
import { mapContext } from '../context/mapContext';

interface Props {
    listData: any[];
}

export default function ListShop({listData}: Props) {

    const { mapData, mapPlace } = useContext(mapContext);

    return (
        <div className="col-span-1 rounded-[20px] bg-white p-5 lg:col-span-5">
            <h2 className="text-[22px] font-extrabold leading-[25px] text-primary">Hệ thống cửa hàng KIDSPLAZA</h2>
            <p className="text-base text-KPZ_text_1st">Vui lòng chọn vị trí để tìm cửa hàng KIDSPLAZA gần bạn nhất</p>
{/* 
            {mapPlace.length > 0 &&
                mapPlace.map((item) => {
                    return (
                        <div key={item.id}>
                            <select>
                                <option>{item.name}</option>
                            </select>
                        </div>
                    );
                })} */}

            <div>
                {/* {mapData.length > 0 &&
                    mapData.map((item) => {
                        return (
                            <div key={item.source_code}>
                                <p>{item.name}</p>
                                <p>
                                    <span>SĐT:</span>
                                    {item.phone}
                                </p>
                                <button>Nhận chỉ đường</button>
                            </div>
                        );
                    })} */}

                     {listData.length > 0 &&
                    listData.map((item) => {
                        return (
                            <div key={item.source_code}>
                                <p>{item.name}</p>
                                <p>
                                    <span>SĐT:</span>
                                    {item.phone}
                                </p>
                                <button>Nhận chỉ đường</button>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
