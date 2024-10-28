import React from 'react';

const AboutMe: React.FC = () => {
    return (

        <div className="flex flex-col items-center justify-center mt-5">
            <p className="text-5xl font-bold mb-3">hi, I'm Trish</p>

            <div className="p-4 max-w-3xl text-left">
                <p className="text-sm mb-2">and I still need to fill this in...</p>
                <p className="text-sm mb-2">

                </p>
            </div>
            <div className="flex flex-wrap justify-start mb-20">
                <div className="border-2 border-green-500 border-dashed p-4 max-w-md m-4 text-left flex-1">
                    <h2 className="text-3xl font-bold mb-2">work & education</h2>
                    <p className="text-sm mb-2">
                        -- <span className="font-bold">currently (since 2023)</span>: studying a PhD at the University of Bristol as part of the Interactive AI CDT programme, having just finished my first year/the MRes part of the degree.
                        my summer project involved creating a vision-based system for exploring deformable musical interfaces.
                    </p>
                    <p className="text-sm mb-2">
                        &nbsp;&nbsp; -*- I'm at the start of my PhD work, which is yet to be defined, but will involve applying interactive AI techniques to musical interfaces,
                        and cover areas related to deformable interfaces, data sonification, music information retrieval and immersive spaces.
                    </p>
                    <p className="text-sm mb-2">
                        &nbsp;&nbsp; -*- my interests also lie in music as therapy, designing for (the many different facets of) accessibility, exploring/mitigating bias in AI and explainable AI (particularly in the context of music/the arts).
                    </p>
                    <p className="text-sm mb-2">-- <span className="font-bold">from 2016 to 2023</span>: worked five and a half years as a software engineer, with the majority of my time spent at Last.fm. I took a break in-between this and my PhD to pursue music full-time for a year and a half.</p>
                    <p className="text-sm mb-2">
                        -- <span className="font-bold">from 2011 to 2016</span>: completed an engineering foundation year and an MEng in Computer Science at the University of Southampton.
                    </p>
                    <p className="text-sm mb-2">
                        &nbsp;&nbsp; -*- my BSc dissertation was in the field of Music Information Retrieval (MIR) and involved writing a hybrid music recommender system.
                    </p>
                    <p className="text-sm">
                        &nbsp;&nbsp; -*- my MEng group design project involved creating a mini-game framework for children with chronic illnesses to provide support for condition management (with the NHS).
                    </p>

                </div>

                <div className="border-2 border-green-500 border-dashed p-4 max-w-md m-4 text-left flex-1">
                    <h2 className="text-3xl font-bold mb-2">music things</h2>
                    <p className="text-sm mb-2">-- I have been a DJ in my bedroom since 2015, and outside of the bedroom since 2018.
                    </p>
                    <p className="text-sm mb-2">
                        &nbsp;&nbsp; -*- currently hosting a bi-monthly radio show on Noods Radio in Bristol, and have previously been a radio show host on Rinse.fm, Netil Radio, and Subtle FM.</p>
                    <p className="text-sm mb-2">
                        &nbsp;&nbsp; -*- played at venues such as The Trinity Centre and Strange Brew in Bristol, Ormside Projects and Fabric in London, OHM in Berlin, De School in Amsterdam, Nowadays in New York, and the Museum of Modern Art in Warsaw.
                    </p>
                    <p className="text-sm mb-2">
                        &nbsp;&nbsp; -*- as well as festivals in Italy, Netherlands, Sweden, Poland, France, and the UK, including Unsound Festival, Dimensions Festival, Intonal, FIBER Festival, Three Wheel Drive, Station Électronique, Nonfrequenze, and others.
                    </p>
                    <p className="text-sm mb-2">
                        -- I am a classically taught pianist and violinist, and a self-taught guitarist, but mostly spend my time playing around in Ableton Live at present. I imagine I'll get back into playing instruments more actively again soon.
                    </p>
                    <p className="text-sm mb-2">
                        -- ultimately, my goal is to work on projects that combine my love for music with my technical abilities/experience, that also take into account my personal motivations, such as accessibility, inclusion, mental health, the environment, explainability in AI, and so forth.
                    </p>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;
