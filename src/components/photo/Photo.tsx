import React, { useEffect, useState } from 'react'
import axios from 'axios'; //axios dùng để call api
import { motion } from "framer-motion"
import { array } from 'prop-types';
import { Link } from 'react-router-dom';
// https://picsum.photos/v2/list  "link api"
//https://picsum.photos/v2/list?page=2&limit=100 "link api"

interface IPhoto {
   id: string;
   author: string;
   width: number;
   height: number;
   url: string;
   download_url: string;
}

const getPhotos = async (page: number) => {
    try {
        const response = await axios
            .get(`https://picsum.photos/v2/list?page=${page}&limit=4`) //giới hạn lại có thể lấy bao nhiêu giá trị trong 1 lần
            ;
        return response.data;
    } catch (error) {
        console.log(error);
    }

}

const Photo = () => {

    const [newPhoto, setNewPhoto] = useState<IPhoto[]>([])
    const [loadPage, setLoadPage] = useState(1)

    const handleLoadMore = () => {
        getPhotos(loadPage).then((image) => {

            const newLoadImg = [...newPhoto, ...image];
            setNewPhoto(newLoadImg);
            setLoadPage(loadPage + 1);
        });

    }

    useEffect(() => {
        handleLoadMore()
    }, [])

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='grid grid-cols-4 gap-5 p-5 w-full text-center'>
                {newPhoto.length > 0 && newPhoto.map((item) => (    //khi map chúng ta nên tạo 1 điều kiện để tránh nó trả về 1 mảng rổng
                    <div key={item.id} className='p-5 rounded-2xl shadow-xl h-[300px] '>
                        <img src={item.download_url} className='h-full w-full rounded-2xl object-cover ' />
                    </div>
                ))}
            </div>

            <div className='flex justify-between w-[50%]'>
                <motion.button
                    className='h-[40px] bg-blue-500 text-white w-[170px] rounded-full hover:bg-red-300'
                    whileHover={{ scale: 1.05 }}
                >
                    <Link to="/">
                        Quay trở lại todoList
                    </Link>
                </motion.button>
                <motion.button
                    onClick={handleLoadMore}
                    className='h-[40px] bg-blue-500 text-white w-[100px] rounded-full hover:bg-blue-600'
                    whileHover={{ scale: 1.05 }}
                >
                    Load more
                </motion.button>
            </div>

        </div>
    )
}

export default Photo;