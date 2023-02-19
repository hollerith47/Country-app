import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* les images importees depuis la balise IMG sont accessibles dans 'public'  */}
            <img src="./logo192.png" alt="logo react" />
            <h3>The World by Hmak</h3>
        </div>
    );
};

export default Logo;