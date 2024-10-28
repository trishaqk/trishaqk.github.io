// src/pages/AboutMe.tsx
import React from 'react';

const Index: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-black mt-5">
            <p className="text-5xl text-left font-bold mb-8">welcome!</p>

            <div className="border-2 border-green-500 border-dashed p-4 max-w-xs text-center">
                <p className="text-left text-sm mb-2">
                    this is a...
                </p>
                <pre className="text-xs font-bold italic text-green-500 text-center">
                    {`                o8o             
                \`"'             
oooo oooo    ooo oooo  oo.ooooo.  
\`88. \`88.  .8'  \`888   888' \`88b 
 \`88..]88..8'    888   888   888 
 \`888' \`888'     888   888   888 
  \`8'  \`8'     o888o  888bod8P' 
                        888       
                     o888o      
                                        `}
                </pre>
                <p className="text-right italic text-sm mb-2">
                    (work in progress)
                </p>
            </div>

        </div>
    );
};

export default Index;