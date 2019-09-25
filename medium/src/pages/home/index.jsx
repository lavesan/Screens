import React from 'react';
import { MiniCard } from '../../components/newsCard';

export default () => {

    const cardsInfo = [
        {
            title: 'Abc',
            description: 'kljklj lkjlkj jn on on on uioniun i ni n iuni n in  uin ui n iun ui n uinuin ui n uin', 
            author: 'author', 
            section: 'section', 
            date: 'Sep 07', 
            aproxReadTime: 6, 
            imgUrl: 'https://i.pinimg.com/originals/80/d1/c1/80d1c15bbb120e8d2e4c079f4fd30c34.jpg'
        }
    ]

    return (
        <div style={{ height: '300vh' }}>
            {cardsInfo.map((info, index) => <MiniCard key={index} {...info} />)}
            <p>Uma página ae {cardsInfo.length}</p>
        </div>
    )
} 