import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Chapter from './Chapter';
import Button from '@mui/material/Button';

const staticChapters = [{
    id: 1,
    name: 'chapter 1',
    data: [{
        wordCount: 10,
        time: ''
    }, {
        wordCount: 20,
        time: ''
    }, {
        wordCount: 30,
        time: ''
    }]
}, {
    id: 2,
    name: 'chapter 2',
    data: [{
        wordCount: 40,
        time: ''
    }, {
        wordCount: 50,
        time: ''
    }, {
        wordCount: 60,
        time: ''
    }]
}]

const Book = () => {
    const [chapters, setChapters] = useState(staticChapters);
    const { id } = useParams();
    const addChapter = () => {
        const c = {
            name: '',
            data: [
                {
                    wordCount: 0,
                    time: ''
                }
            ]
        }
        setChapters(chapters => [...chapters, c]);
    };
    return <div>
        {chapters.map((item, i) => (
            <div key={i}><Chapter item={item}/></div>
        ))}
        <Button onClick={addChapter}>Add chapter</Button></div>;
};

export default Book;
