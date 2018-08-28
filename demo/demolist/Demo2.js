/**
 *
 * @title 项目中使用，及切换语言
 * @description Locale组件通过context传递语言包，子组件通过contextTypes获取context上的beeLocale语言包对象。
 *
 */

import React, {Component} from 'react';
import Locale from '../../src';
import PropTypes from 'prop-types';
import Popconfirm from 'bee-popconfirm';
import Button from 'bee-button';
import ZhCn from "../../src/zh_CN";
import EnUS from "../../src/en_US";

class DemoButton extends Component{
    render() {
       let localeText = this.context.beeLocale.DemoButton.text;
        return (
            <div style={{ marginBottom: 20}}>
                <Button onClick={this.props.onChangeLang} colors="primary">
                    {localeText}
                </Button>
            </div>

        )
    }
}
DemoButton.contextTypes = {
    beeLocale: PropTypes.object
}

let en = {
    ...EnUS,
    DemoButton: {
        text: 'Change Language'
    },
    PopconfirmContent: {
       content: 'Do you like tinper-bee UI library?' ,
        buttonText: 'see right'
    }
};

let zh = {
    ...ZhCn,
    DemoButton: {
        text: '切换语言'
    },
    PopconfirmContent: {
        content: '你喜欢tinper-bee组件库吗？' ,
        buttonText: '看右边'
    }
};



class Demo1 extends Component {
    state = {
        lang: zh
    }
    handleChangeLang = () => {
        let { lang } = this.state;
        if(lang.lang === 'zh_CN'){
            this.setState({
                lang: en
            })
        }else{
            this.setState({
                lang: zh
            })
        }

    }
    render() {
        let { lang } = this.state;

        return (
            <Locale locale={lang}>
                <div>
                    <DemoButton onChangeLang={this.handleChangeLang} />
                    <Popconfirm
                        trigger="click"
                        placement="right"
                        content={lang.PopconfirmContent.content}>
                        <Button colors="primary">{lang.PopconfirmContent.buttonText}</Button>
                    </Popconfirm>
                </div>

            </Locale>
        )
    }
}

export default Demo1;