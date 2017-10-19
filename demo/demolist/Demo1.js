/**
 *
 * @title 这是标题
 * @description 这是描述
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Locale from '../../src';

class Test extends Component {
    render() {
        console.log(this.context.beeLocale);
        return (
            <div>
                欢迎使用老赵DEMO系统
            </div>
        )
    }
}
Test.contextTypes = {
    beeLocale: PropTypes.object
}


function Demo1() {
    return (
        <Locale>
            <Test />
        </Locale>
    )
}



export default Demo1;