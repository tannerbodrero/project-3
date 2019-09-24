import React from "react";
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';


class SignInWidget extends React.Component {

    signInWidgetConfig = {

        logo: 'https://logo.clearbit.com/okta.com',
        language: 'en',
        i18n: {

            'en': {
                'primaryauth.title': 'Sign In',   // Changes the sign in text
                'primaryauth.submit': 'Sign In',  // Changes the sign in button
                'primaryauth.username.placeholder': 'Email'
            }
        },
        baseUrl: this.props.baseUrl,
        features: { registration: true }
    }



    componentDidMount(props) {
        const el = ReactDOM.findDOMNode(this);
        this.widget = new OktaSignIn(this.signInWidgetConfig);
        this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
    }

    componentWillUnmount() {
        this.widget.remove();
    }

    render() {
        return <div />;
    }

};
export default SignInWidget;

