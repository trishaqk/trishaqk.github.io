import React from 'react';

const MusicProjects: React.FC = () => {
    return (<div className="flex flex-col items-center justify-center mt-5">


        <div className="p-4 max-w-3xl text-left">
            <div className="flex flex-row gap-4 mb-4">
                <img src="public/IMG_3046.png" className="max-w-[30%] h-auto" alt="Project image 1" />
                <img src="public/multicontour.png" className="max-w-[60%] h-auto" alt="Project image 2" />
            </div>
            <p className="text-xl font-bold mb-3">a vision-based system for exploring deformable musical interfaces</p>
            <p className="text-sm mb-2">
                This project involved the development and evaluation of an interactive, vision-based system that translates
                deformed clay shapes into sound. The system integrates computer vision techniques, machine learning, and
                audio generation techniques to explore novel mappings between physical object manipulation and sonic output.
                A camera feed captures clay shapes, from which key shape-based features such as contour, area, and elongation
                are extracted in real-time. These features are processed by the Wekinator machine learning platform, which maps
                the shape features to real-time control of sound parameters in Ableton Live using OSC protocols. Various sound synthesis
                techniques, including deep learning-based audio transformation with IRCAM’s RAVE and GAN-based sound generation,
                were used within the system. The system was designed to be modular, allowing for the development and testing of
                components in isolation, and simple integration of new components.
                {/* The evaluation assesses the system’s
                functional and non-functional requirements, focusing on object detection accuracy, shape feature extraction,
                and real-time responsiveness. Additional testing explored the impact of hand occlusion and feature mapping
                strategies for sound control. While the system successfully met its objectives, further improvements
                in feature scalability, and sound mapping can be made. This project highlights the potential for combining
                interactive machine learning and audio synthesis to create innovative sound design tools and lays the groundwork
                for future user studies. */}
            </p>
        </div>
        <p className="text-sm mb-2">
            more to fill in...
        </p>
    </div>
    );
};
export default MusicProjects;

