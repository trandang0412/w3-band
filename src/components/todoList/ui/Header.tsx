import React from 'react';

type Props = {
    Name: string;
};
export default function Header({ Name }: Props) {
    return <h1 className="text-center text-[40px] font-bold opacity-60 ">{Name}</h1>;
}
