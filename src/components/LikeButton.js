import { useState } from 'react';

const LikeButton = () => {
    const bgColors = ['purple','blue','green','yellow','orange','red'];
    let [likeCounts, setLikecounts] = useState(0);
    let [colorBg, setColorBg] = useState(bgColors[0]);

    let increaseCounts = () => {
        likeCounts = likeCounts + 1;
        setLikecounts(likeCounts);
        const newColorBg = Math.floor(Math.random()* (5));
        setColorBg(bgColors[newColorBg]);
        console.log(newColorBg);
    };

    return (
    <button style={{backgroundColor:`${colorBg}`, color:"white"}} onClick={() => increaseCounts()}>
    {likeCounts} {likeCounts === 0 && <>Likes</>}{' '}
    {likeCounts === 1 && <>Like</>}
    {likeCounts > 1 && <>Likes</>}
    </button>
    );
};

export default LikeButton;
