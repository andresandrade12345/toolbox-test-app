import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    Alert
} from 'reactstrap';
import { sendMessage } from '../../actions/messageActions';
import './messageForm.css';

export class MessageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMessageRequired: false,
            showResponse: true,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    handleSubmit (e) {
        e && e.preventDefault();

        const message = this.getMessage();

        if (!message) {
            this.setState({
                showMessageRequired: true,
            });

            return;
        }

        let stateChanges = {};

        if (this.state.showMessageRequired) {
            stateChanges.showMessageRequired = false;
        }

        if (!this.state.showResponse) {
            stateChanges.showResponse = true;
        }

        if (Object.keys(stateChanges).length > 0) {
            this.setState(stateChanges);
        }

        this.props.sendMessage({ message });
    }

    onDismiss() {
        this.setState({ showResponse: false });
    }

    getMessage () {
        return this.messageInput.value;
    }

    render() {
        let message,
            error;

        if (this.props.message) {
            message = this.props.message.message;
            error = this.props.message.error;
        }

        return (
            <div className="message-form-wrapper">
                <Form onSubmit={this.handleSubmit} method="POST" className="message-form">
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input invalid={this.state.showMessageRequired} type="textarea" innerRef={node => this.messageInput = node} name="message" id="message" placeholder="Write your message..." />
                        <FormFeedback>Message is required</FormFeedback>
                    </FormGroup>
                    <div className="message-form-actions pull-right">
                        <Button type="submit" color="primary" className="message-form-submit-btn">Send Message</Button>
                        <Button type="reset" color="secondary" className="message-form-reset-btn">Reset</Button>
                    </div>
                </Form>
                <div className="message-form-response">
                    {!error && message && message.length > 0 &&
                        <Alert color="secondary" className="message-form-response-success" type="success" isOpen={this.state.showResponse} toggle={this.onDismiss}>
                            <h4 className="alert-heading">New Message From Server!</h4>
                            <hr/>
                            <p>
                                {message}
                            </p>
                        </Alert>
                    }
                    {error && error.length > 0 &&
                        <Alert color="danger" className="message-form-response-error" type="error" isOpen={this.state.showResponse} toggle={this.onDismiss}>
                            <h4 className="alert-heading">Error</h4>
                            <hr/>
                            <p>
                                {error}
                            </p>
                        </Alert>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { message } = state;

    return {
        message,
    }
};

const mapDispatchToProps = {
    sendMessage,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessageForm);