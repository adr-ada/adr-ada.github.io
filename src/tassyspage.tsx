import React from 'react';
import { Button } from './components/ui/button';
import cat0 from './assets/87f375d0f795803940a0c4e1f2f3e2be.gif'
import cat1 from './assets/pa-ti-bb.gif';
import cat2 from './assets/30731df1cdd458e17e2146a90d7c6b7c.gif'
import cat3 from './assets/giphy.gif'
import yay from './assets/yay-kitty.gif'
import { useState } from 'react';

const TassysPage = () => {
    const [title, setTitle] = useState("Will you be my valentine?");
    const [yesText, setYesText] = useState("Yes !");
    const [noText, setNoText] = useState("no");
    const [imageSrc, setImageSrc] = useState(cat0);
    const [yesclickCount, setyesClickCount] = useState(0)
    const [noclickCount, setnoClickCount] = useState(0)
    const [clickCount, setClickCount] = useState(0)
    const [showYayMessage, setShowYayMessage] = useState(false)

    const handleYesClick = () => {
        setYesText(yesText + "!");
        setyesClickCount(yesclickCount + 1);
        setClickCount(clickCount + 1);
        if (clickCount < 2) {
            setTitle("I didn't think you were gonna fold this quickly");
            setShowYayMessage(true);
        } else {
            setTitle("YAYYY !!! I LOVE YOU")
        }
        setImageSrc(yay)
        //setImageSrc(cat2); // Change the image when Yes is clicked
    };

    const handleNoClick = () => {
        setnoClickCount(noclickCount + 1);
        setClickCount(clickCount + 1);
        updateImage(clickCount + 1)
        //setNoText(noText + "!");
        //setImageSrc(cat2); // Change the image when No is clicked
    };

    const updateImage = (count) => {
        if (count === 1) {
            setImageSrc(cat2);
        } else if (count === 2) {
            setImageSrc(cat3);
        } else {
            setImageSrc(cat1);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {title}
            {showYayMessage && <h2>YAYYY !!! I LOVE YOU</h2>}
            <div className="flex justify-center py-8">
                <img src={imageSrc} alt="cat" className="max-w-60 h-auto" />
            </div>
            <div className="flex gap-4 mt-4">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                    style={{ transform: `scale(${1 + noclickCount * 0.1})` }}
                    onClick={handleYesClick}
                >
                    {yesText}
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                    style={{ transform: `scale(${1 - noclickCount * 0.1})` }}
                    onClick={handleNoClick}
                >
                    {noText}
                </button>
            </div>
        </div>
    );
}

export default TassysPage;