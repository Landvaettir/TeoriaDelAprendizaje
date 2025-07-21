import React from 'react';
// import '@fontsource/notable';
// import '@fontsource/delius';
// import '@fontsource/rouge-script';
import './Header.css';

const Header = () => {
    const stars = Array.from({ length: 100 });

    return (
        <header className="header" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="line-top">
                <h1 className="teorias">TEORÍAS</h1>
                <h2 className="del">del</h2>
            </div>
            <div className="aprendizaje-wrapper">
                <h3 className="aprendizaje">aprendizaje</h3>
            </div>

            {stars.map((_, i) => {
                const size = 20 + Math.random() * 20; // tamaño más grande
                const left = Math.random() * 100;
                const duration = 5 + Math.random() * 5;
                const delay = Math.random() * 10;
                const opacity = 0.7 + Math.random() * 0.3;

                return (
                    <span
                        key={i}
                        style={{
                            position: 'absolute',
                            top: '-20px',
                            left: `${left}%`,
                            width: size,
                            height: size,
                            opacity,
                            animation: `fallingStar ${duration}s linear infinite`,
                            animationDelay: `${delay}s`,
                            pointerEvents: 'none',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: `
            <svg viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
            </svg>
          `}}
                    />
                );
            })}
        </header>
    );
};

export default Header;
