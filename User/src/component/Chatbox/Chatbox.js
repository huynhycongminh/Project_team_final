import React, { Component } from "react";
import $ from 'jquery';

export default class Chatbox extends Component {

    constructor(props) {
        super(props);
        this.onChangeChat = this.onChangeChat.bind(this);
        this.onSubmitChat = this.onSubmitChat.bind(this);

        this.state = {
            inputchat: '',
        }
    }

    onChangeChat(e) {
        this.setState({
            inputchat: e.target.value
        });
    }

    onSubmitChat(e) {
        e.preventDefault();

        const inputchat = this.state.inputchat
        setTimeout(function () {
            $('#info-chatbot').append(`
                <div class="box-right">
                    <p class="show-chat-customer text-chatbot">`+inputchat+`</p>
                </div>
            `)  
        }, 900);
        this.setState({
            inputchat: ''
        });
        
        const InputChat = inputchat.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        if(InputChat === 'hi'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Hello, thanks for visiting</p>
                    </div>
                `)
            }, 1900);
        }
        else if(InputChat === 'is-anyone-there'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Good to see you again</p>
                    </div>
                `)
            }, 1900);
        }
        else if(InputChat === 'hello'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Hi there, how can I help?</p>
                    </div>
                `)
            }, 1900);
        }
        else if(InputChat === 'bye'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">See you later, thanks for visiting</p>
                    </div>
                `)
            }, 1900);
        }
        else if(InputChat === 'see-you-later'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Have a nice day</p>
                    </div>
                `)
            }, 1900);
        }
        else  if(InputChat === 'goodbye'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Bye! Come back again soon</p>
                    </div>
                `)
            }, 1900);
        }
        else  if(InputChat === 'thanks'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Happy to help!</p>
                    </div>
                `)
            }, 1900);
        }
        else   if(InputChat === 'thank-you'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Any time!</p>
                    </div>
                `)
            }, 1900);
        }
        else if(InputChat === 'what-hours-are-you-open'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">We're open every day 9am-9pm</p>
                    </div>
                `)
            }, 1900);
        }
        else if(InputChat === 'what-are-your-hours'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Our hours are 9am-9pm every day</p>
                    </div>
                `)
            }, 1900);
        }
        else if(InputChat === 'what-is-the-best-car'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Audi Q7</p>
                    </div>
                `)
            }, 1900);
        }
        else if(InputChat === 'which-car-is-the-cheapest'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Audi Q2</p>
                    </div>
                `)  
            }, 1900);
        }
        else if(InputChat === 'how-much-does-audi-a4-cost'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">1.695.000.000 VND</p>
                    </div>
                `)  
            }, 1900);
        }
        else if(InputChat === 'how-much-does-audi-a6-cost'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">2.500.000.000 VND</p>
                    </div>
                `)  
            }, 1900);
        }
        else if(InputChat === 'how-much-does-audi-a7-cost'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">2.500.000.000 VND</p>
                    </div>
                `)  
            }, 1900);
        }
        else if(InputChat === 'how-much-does-audi-q3-cost'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">1.520.000.000 VND</p>
                    </div>
                `)  
            }, 1900);
        }
        else if(InputChat === 'how-much-does-audi-q5-cost'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">2.400.000.000 VND</p>
                    </div>
                `)  
            }, 1900);
        }
        else if(InputChat === 'how-much-does-audi-q7-cost'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">3.420.000.000 VND</p>
                    </div>
                `)  
            }, 1900);
        }
        else if(InputChat === 'we-need-a-family-car'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Audi Q3 Audi Q5 Audi Q7</p>
                    </div>
                `)  
            }, 1900);
        }
        else if(InputChat === 'we-need-a-sports-car'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">Audi A7</p>
                    </div>
                `)  
            }, 1900);
        }
        else if(InputChat === 'i-want-to-know-some-incentives-when-buying-a-car'){
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">For more information, please contact Hotline: 0357359239</p>
                    </div>
                `)  
            }, 1900);
        }
        else{
            setTimeout(function () {
                $('#info-chatbot').append(`
                    <div class="box-left">
                        <p class="show-chat-admin text-chatbot">For more information, please contact Hotline: 0357359239</p>
                    </div>
                `)  
            }, 1900);
        }    
    }

    render() {
        return (
            <div>
                <button class="btn btn-primary chatbox" type="button" data-toggle="collapse" data-target="#collapseChatbox" aria-expanded="false" aria-controls="collapseExample">
                    <i class="fa fa-comments"></i>  
                </button>
                <div class="collapse" id="collapseChatbox">
                    <div class="container-chatbox">
                        <div class="header-chatbox">
                            <h4>Chat with me</h4>
                            <button class="close-chatbox" type="button" data-toggle="collapse" data-target="#collapseChatbox" aria-expanded="false" aria-controls="collapseExample" aria-label="Close">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                        <div class="collapse-chatbox">
                            <div class="body-chatbox">
                                <div id="info-chatbot">
                                    <div class="box-left">
                                        <p class="show-chat-admin text-chatbot">May i help you ?</p>
                                    </div>
                                </div>
                            </div>
                            <div class="input-chatbox">
                                <form onSubmit={this.onSubmitChat}>
                                    <input type="text" onChange={this.onChangeChat} value={this.state.inputchat} class="form-chatbox" placeholder="Aa" />
                                    <button type="button" class="btn-input-chatbox"><i class="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}