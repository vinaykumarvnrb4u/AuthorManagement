import * as React from 'react';
import TextField from '@mui/material/TextField';

class ChapterDetail extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const { wordCount, time } = this.props;
        console.log('wordCount :', wordCount)
        return (
            <div> 
                <div><TextField id="outlined-basic" label="Word count" variant="outlined" value={wordCount}/></div><br/>
                <div><TextField id="outlined-basic" label="date time" variant="outlined" value={time}/></div><br/>
            </div>
        );
    }
}

export default ChapterDetail;