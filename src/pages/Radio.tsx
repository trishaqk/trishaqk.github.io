import React from 'react';

const Radio: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-black mt-5">
            <p className="text-md text-left font-bold mb-2">soundcloud</p>

            <iframe
                width="50%"
                height="450"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1228273978&color=%2300ff5a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div className="mb-10"
                style={{
                    fontSize: '10px',
                    color: '#cccccc',
                    lineBreak: 'anywhere',
                    wordBreak: 'normal',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
                    fontWeight: 100
                }}
            >
                <a
                    href="https://soundcloud.com/k_means"
                    title="k means"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#cccccc', textDecoration: 'none' }}
                >
                    k means
                </a> ·
                <a
                    href="https://soundcloud.com/k_means/sets/guest-mixes"
                    title="podcasts & guest mixes"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#cccccc', textDecoration: 'none' }}
                >
                    podcasts & guest mixes
                </a>

            </div>
            <p className="text-md text-left font-bold mb-2">mixcloud</p>
            <iframe width="50%" height="120" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fk_means/favorites%2F"></iframe>
            <p className="text-md text-left mb-2 mu-2">the rest of my mixcloud mixes can be found <a className="underline" href="https://www.mixcloud.com/k_means/favorites/">here</a></p>
        </div >
    );


};

export default Radio;