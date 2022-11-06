import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ChapterDetail from './ChapterDetail';

const Chapter = ({ item }) => {
    const [chapter, setChapter] = useState(item.data);
    const addChapter = () => {
        const c = {
            wordCount: 0,
            time: ''
        }
        setChapter(chapter => [...chapter, c]);
    };
        return (
            <div> 
                <div>Chapter Name: 
                <TextField id="outlined-basic" label="Chapter" variant="outlined" value={item.name}/>
                </div><br/>
                {chapter.map(({ wordCount, time }, i) => (
                    <div key={i}><ChapterDetail wordCount={wordCount} time={time} /></div>
                ))}
                <Button onClick={addChapter}>Add Details</Button>
            </div>
        );
}

export default Chapter;