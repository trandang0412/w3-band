import ListShop from './listShop';
import MapBox from './mapBox';

const fakeData = [
    {
        source_code: 14010,
        name: 'Số 01B-02B Chung Cư Lideco, Phố Trần Hưng Đạo, Hạ Long, Quảng Ninh',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 02037102888\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.956195,
        longitude: 107.08497,
        region_id: 664,
        district_id: 619,
        street: 'Số 01B-02B Chung Cư Lideco, Phố Trần Hưng Đạo, Hạ Long, Quảng Ninh',
        phone: '02037102888',
        store_image: 'Lideco.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 14020,
        name: 'Số 8 Tô Hiến Thành (Chợ Loong Toong), Phường Yết Kiêu, Hạ Long, Quảng Ninh',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.7300.0606 - Ext: 1402\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.957885,
        longitude: 107.083426,
        region_id: 664,
        district_id: 619,
        street: 'Số 8 Tô Hiến Thành (Chợ Loong Toong), Phường Yết Kiêu, Hạ Long, Quảng Ninh',
        phone: '024.7300.0606 - Ext: 1402',
        store_image: 'Ha-Long_1.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 16030,
        name: 'Số 326 Trần Nguyên Hãn, P. Niệm Nghĩa, Quận Lê Chân, Hải Phòng',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.7300.0606 - Ext: 1603\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.841771,
        longitude: 106.667771,
        region_id: 638,
        district_id: 345,
        street: 'Số 326 Trần Nguyên Hãn, P. Niệm Nghĩa, Quận Lê Chân, Hải Phòng',
        phone: '024.7300.0606 - Ext: 1603',
        store_image: 'Si_u_th_M_b_u_v_em_b_Kidsplaza_326_Tr_n_Nguy_n_H_n.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 16040,
        name: 'Số 36 - 38 Hồ Sen, P. Dư Hàng, Quận Lê Chân, Hải Phòng',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.7300.0606 - Ext: 1604\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.846116,
        longitude: 106.681538,
        region_id: 638,
        district_id: 345,
        street: 'Số 36 - 38 Hồ Sen, P. Hàng Kênh, Quận Lê Chân, Hải Phòng',
        phone: '024.7300.0606 - Ext: 1604',
        store_image: 'Si_u_th_M_b_u_v_em_b_Kidsplaza_36_H_Sen.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 16050,
        name: 'Số 124 Bạch Đằng 2, TT. Núi Đèo, Huyện Thủy Nguyên, Hải Phòng',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.7300.0606 - Ext: 1605\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.920558,
        longitude: 106.677378,
        region_id: 638,
        district_id: 350,
        street: 'Số 124 Bạch Đằng 2, TT. Núi Đèo, Huyện Thủy Nguyên, Hải Phòng',
        phone: '024.7300.0606 - Ext: 1605',
        store_image: 'Si_u_th_M_b_u_v_em_b_Kidsplaza_124_B_ch_ng_1.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 16060,
        name: 'Số 84 Ngô Gia Tự, P. Cát Bi, Quận Hải An, Hải Phòng',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 0225.351.0256\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.830145,
        longitude: 106.702825,
        region_id: 638,
        district_id: 346,
        street: 'Số 84 Ngô Gia Tự, P. Cát Bi, Quận Hải An, Hải Phòng',
        phone: '0225.351.0256',
        store_image: 'Si_u-th_-M_-b_u-v_-em-b_-Kidsplaza-84-Ng_-Gia-T_.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 18020,
        name: 'Số 77-79 Đường Điện Biên, Tổ 15, P. Cửa Bắc, Nam Định',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 078.243.06.88\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.429708,
        longitude: 106.164691,
        region_id: 632,
        district_id: 284,
        street: 'Số 77-79 Đường Điện Biên, Tổ 15, P. Cửa Bắc, TP. Nam Định, Tỉnh Nam Định',
        phone: '078.243.06.88',
        store_image: 'Si_u-th_-m_-v_-b_-Kidsplaza-79-_i_n-Bi_n.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 18030,
        name: 'Số 110 Trần Hưng Đạo, P. Trần Hưng Đạo, Nam Định',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 0228.368.8689\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.424945,
        longitude: 106.176808,
        region_id: 632,
        district_id: 284,
        street: 'Số 110 Trần Hưng Đạo, P. Trần Hưng Đạo, Nam Định',
        phone: '0228.368.8689',
        store_image: 'Si_u-th_-m_-v_-b_-Kidsplaza-110-Tr_n-H_ng-_o.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 20010,
        name: 'Số 333 Lương Ngọc Quyến, P. Hoàng Văn Thụ, Thái Nguyên',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 020.83.939.998 \n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 21.763883,
        longitude: 105.70985,
        region_id: 654,
        district_id: 519,
        street: 'Số 333 Lương Ngọc Quyến, P. Hoàng Văn Thụ, Thái Nguyên',
        phone: '020.83.939.998',
        store_image: 'TH_I_NGUY_N.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30010,
        name: 'Số 20-22 Thái Thịnh, P. Ngã Tư Sở, Quận Đống Đa, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.6675.7395\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 21.006073,
        longitude: 105.822196,
        region_id: 619,
        district_id: 124,
        street: 'Số 20-22 Thái Thịnh, P. Ngã Tư Sở, Quận Đống Đa, Hà Nội',
        phone: '024.6675.7395',
        store_image: 'Thai-thinh.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30020,
        name: 'Số 56 Giang Văn Minh, P. Đội Cấn, Quận Ba Đình, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.3722.8288\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 21.03408,
        longitude: 105.82706,
        region_id: 619,
        district_id: 119,
        street: 'Số 56 Giang Văn Minh, P. Đội Cấn, Quận Ba Đình, Hà Nội',
        phone: '024.3722.8288',
        store_image: 'Si_u_th_M_b_v_em_b_Kidsplaza_56_Giang_V_n_Minh.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30040,
        name: 'Số 41 Trần Thái Tông, P. Dịch Vọng, Quận Cầu Giấy, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 0246.327.1808\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 21.035122,
        longitude: 105.789411,
        region_id: 619,
        district_id: 123,
        street: 'Số 41 Trần Thái Tông, P. Dịch Vọng, Quận Cầu Giấy, Hà Nội',
        phone: '0246.327.1808',
        store_image: '40_TRAN_THAI_TONG.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30070,
        name: 'Số 374 Xã Đàn, P. Ô Chợ Dừa, Quận Đống Đa, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.3572.0066 hoặc 079.629.75.88\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 21.014621,
        longitude: 105.833862,
        region_id: 619,
        district_id: 124,
        street: 'Số 374 Xã Đàn, P. Ô Chợ Dừa, Quận Đống Đa, Hà Nội',
        phone: '024.3572.0066',
        store_image: '374-Xa-dan.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30080,
        name: 'Số 27 Trần Duy Hưng, P. Trung Hòa, Quận Cầu Giấy, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.3556.5566\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 21.013122,
        longitude: 105.802744,
        region_id: 619,
        district_id: 123,
        street: 'Số 27 Trần Duy Hưng, P. Trung Hòa, Quận Cầu Giấy, Hà Nội',
        phone: '024.3556.5566',
        store_image: '27-Tran-Duy-Hung.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30100,
        name: 'Số 9 Tân Mai, P. Tân Mai, Quận Hoàng Mai, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.6673.8800 \n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.983809,
        longitude: 105.846208,
        region_id: 619,
        district_id: 126,
        street: 'Số 9 Tân Mai, P. Tân Mai, Quận Hoàng Mai, Hà Nội',
        phone: '024.6673.8800',
        store_image: 'Kids-tan-mai.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30110,
        name: 'Số 4 - 6 Nguyễn Hữu Thọ, Bắc Linh Đàm, P. Đại Kim, Quận Hoàng Mai, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.6672.8800\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.969552,
        longitude: 105.829897,
        region_id: 619,
        district_id: 126,
        street: 'Số 4 - 6 Nguyễn Hữu Thọ, Bắc Linh Đàm, P. Đại Kim, Quận Hoàng Mai, Hà Nội',
        phone: '024.6672.8800',
        store_image: '4_Nguyen_Huu_Tho_1.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30130,
        name: 'Số 21 Vương Thừa Vũ, P. Khương Trung, Q. Thanh Xuân, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 0243.5668.776\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày) \n❤️ Email: contact@kidsplaza.vn',
        latitude: 21.00035,
        longitude: 105.822259,
        region_id: 619,
        district_id: 127,
        street: 'Số 21 Vương Thừa Vũ, P. Khương Trung, Quận Thanh Xuân, Hà Nội',
        phone: '0243.5668.776',
        store_image: '21-vuong-thua-vu.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30140,
        name: ' Số 66 Nguyễn Khuyến, Khu Đô Thị Văn Quán, P. Phúc La, Quận Hà Đông, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.3312.0224 \n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 20.976664,
        longitude: 105.788407,
        region_id: 619,
        district_id: 135,
        street: ' Số 66 Nguyễn Khuyến, Khu Đô Thị Văn Quán, P. Phúc La, Quận Hà Đông, Hà Nội',
        phone: '024.3312.0224',
        store_image: '66_nguy_n_khuy_n.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30150,
        name: 'Số 148 Ngô Gia Tự , P. Đức Giang, Quận Long Biên, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.3652.4080 hoặc 093.619.45.77\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 1105 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 21.059967,
        longitude: 105.89278,
        region_id: 619,
        district_id: 122,
        street: 'Số 148 Ngô Gia Tự , P. Đức Giang, Quận Long Biên, Hà Nội',
        phone: '024.3652.4080',
        store_image: '148NGT_1.jpg',
        is_new: 0,
        is_coming_soon: 0,
    },
    {
        source_code: 30160,
        name: 'Số 174 Lạc Long Quân, P. Bưởi, Quận Tây Hồ, Hà Nội',
        description:
            '☎️ Điện thoại tư vấn bán hàng: 024.3759.3432\n☎️ Điện thoại góp ý - khiếu nại: 1800.6608 - 3 (từ 8:00 - 21:00 mỗi ngày)\n❤️ Email: contact@kidsplaza.vn',
        latitude: 21.051881,
        longitude: 105.808634,
        region_id: 619,
        district_id: 121,
        street: 'Số 174 Lạc Long Quân, P. Bưởi, Quận Tây Hồ, Hà Nội',
        phone: '024.3759.3432',
        store_image: '174_lac_long_quan.png',
        is_new: 0,
        is_coming_soon: 0,
    },
];

const fakePlace =[
  {
    "code": "VN-01",
    "id": 609,
    "name": "An Giang"
  },
  {
    "code": "VN-02",
    "id": 643,
    "name": "Bà Rịa - Vũng Tàu"
  },
  {
    "code": "VN-03",
    "id": 670,
    "name": "Bắc Giang"
  },
  {
    "code": "VN-04",
    "id": 671,
    "name": "Bắc Kạn"
  },
  {
    "code": "VN-05",
    "id": 656,
    "name": "Bạc Liêu"
  },
  {
    "code": "VN-06",
    "id": 669,
    "name": "Bắc Ninh"
  },
  {
    "code": "VN-07",
    "id": 634,
    "name": "Bến Tre"
  },
  {
    "code": "VN-09",
    "id": 645,
    "name": "Bình Dương"
  },
  {
    "code": "VN-10",
    "id": 613,
    "name": "Bình Phước"
  },
  {
    "code": "VN-11",
    "id": 636,
    "name": "Bình Thuận"
  },
  {
    "code": "VN-08",
    "id": 623,
    "name": "Bình Định"
  },
  {
    "code": "VN-12",
    "id": 644,
    "name": "Cà Mau"
  },
  {
    "code": "VN-59",
    "id": 646,
    "name": "Cần Thơ"
  },
  {
    "code": "VN-13",
    "id": 637,
    "name": "Cao Bằng"
  },
  {
    "code": "VN-19",
    "id": 641,
    "name": "Gia Lai"
  },
  {
    "code": "VN-20",
    "id": 626,
    "name": "Hà Giang"
  },
  {
    "code": "VN-21",
    "id": 668,
    "name": "Hà Nam"
  },
  {
    "code": "VN-63",
    "id": 619,
    "name": "Hà Nội"
  },
  {
    "code": "VN-22",
    "id": 659,
    "name": "Hà Tĩnh"
  },
  {
    "code": "VN-23",
    "id": 655,
    "name": "Hải Dương"
  },
  {
    "code": "VN-60",
    "id": 638,
    "name": "Hải Phòng"
  },
  {
    "code": "VN-24",
    "id": 663,
    "name": "Hậu Giang"
  },
  {
    "code": "VN-25",
    "id": 642,
    "name": "Hòa Bình"
  },
  {
    "code": "VN-26",
    "id": 614,
    "name": "Hưng Yên"
  },
  {
    "code": "VN-27",
    "id": 635,
    "name": "Khánh Hòa"
  },
  {
    "code": "VN-28",
    "id": 625,
    "name": "Kiên Giang"
  },
  {
    "code": "VN-29",
    "id": 610,
    "name": "Kon Tum"
  },
  {
    "code": "VN-30",
    "id": 633,
    "name": "Lai Châu"
  },
  {
    "code": "VN-31",
    "id": 622,
    "name": "Lâm Đồng"
  },
  {
    "code": "VN-32",
    "id": 628,
    "name": "Lạng Sơn"
  },
  {
    "code": "VN-33",
    "id": 620,
    "name": "Lào Cai"
  },
  {
    "code": "VN-34",
    "id": 662,
    "name": "Long An"
  },
  {
    "code": "VN-35",
    "id": 632,
    "name": "Nam Định"
  },
  {
    "code": "VN-36",
    "id": 624,
    "name": "Nghệ An"
  },
  {
    "code": "VN-37",
    "id": 639,
    "name": "Ninh Bình"
  },
  {
    "code": "VN-38",
    "id": 660,
    "name": "Ninh Thuận"
  },
  {
    "code": "VN-39",
    "id": 665,
    "name": "Phú Thọ"
  },
  {
    "code": "VN-58",
    "id": 627,
    "name": "Phú Yên"
  },
  {
    "code": "VN-40",
    "id": 666,
    "name": "Quảng Bình"
  },
  {
    "code": "VN-41",
    "id": 652,
    "name": "Quảng Nam"
  },
  {
    "code": "VN-42",
    "id": 618,
    "name": "Quảng Ngãi"
  },
  {
    "code": "VN-43",
    "id": 664,
    "name": "Quảng Ninh"
  },
  {
    "code": "VN-44",
    "id": 616,
    "name": "Quảng Trị"
  },
  {
    "code": "VN-45",
    "id": 612,
    "name": "Sóc Trăng"
  },
  {
    "code": "VN-46",
    "id": 630,
    "name": "Sơn La"
  },
  {
    "code": "VN-62",
    "id": 667,
    "name": "T.P. Hồ Chí Minh"
  },
  {
    "code": "VN-47",
    "id": 631,
    "name": "Tây Ninh"
  },
  {
    "code": "VN-48",
    "id": 658,
    "name": "Thái Bình"
  },
  {
    "code": "VN-49",
    "id": 654,
    "name": "Thái Nguyên"
  },
  {
    "code": "VN-50",
    "id": 615,
    "name": "Thanh Hóa"
  },
  {
    "code": "VN-51",
    "id": 647,
    "name": "Thừa Thiên Huế"
  },
  {
    "code": "VN-52",
    "id": 649,
    "name": "Tiền Giang"
  },
  {
    "code": "VN-53",
    "id": 657,
    "name": "Trà Vinh"
  },
  {
    "code": "VN-54",
    "id": 617,
    "name": "Tuyên Quang"
  },
  {
    "code": "VN-55",
    "id": 621,
    "name": "Vĩnh Long"
  },
  {
    "code": "VN-56",
    "id": 651,
    "name": "Vĩnh Phúc"
  },
  {
    "code": "VN-57",
    "id": 640,
    "name": "Yên Bái"
  },
  {
    "code": "VN-61",
    "id": 629,
    "name": "Đà Nẵng"
  },
  {
    "code": "VN-14",
    "id": 653,
    "name": "Đắk Lắk"
  },
  {
    "code": "VN-15",
    "id": 611,
    "name": "Đắk Nông"
  },
  {
    "code": "VN-16",
    "id": 650,
    "name": "Điện Biên"
  },
  {
    "code": "VN-17",
    "id": 648,
    "name": "Đồng Nai"
  },
  {
    "code": "VN-18",
    "id": 661,
    "name": "Đồng Tháp"
  }
]

export default function shopSystem() {
    return (
        <div className="p-32">
            <div className="grid grid-cols-1 gap-5 lg:h-[800px] lg:grid-cols-12">
                <div className="col-span-1 rounded-[20px] bg-white p-5 lg:col-span-5">
                    <ListShop listData={fakeData} listPlace={fakePlace}></ListShop>
                </div>
                <div className="">
                    <div>
                        <MapBox mapData={fakeData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
