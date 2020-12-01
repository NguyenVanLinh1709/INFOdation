import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function ColorBox() {
    const [color, setColor] = useState('deepink')

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}>

        </div>
    );
}

export default ColorBox;