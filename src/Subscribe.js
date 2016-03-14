var React = require('react');
var Validation = require('./../build');

var Subscribe = React.createClass({
    onSubmit: function(event) {
        event.preventDefault();

        console.log(this.refs.form.forceValidate(true));
    },

    render: function() {
        return (
            <Validation.Form onSubmit={this.onSubmit} ref='form'>
                <h2>Subscription form</h2>
                <label>
                    Name
                    <Validation.Input placeholder='' name='firstname' validations={[
                        {
                            rule: 'isRequired'
                        },
                        {
                            rule: 'isAlpha'
                        }
                    ]} />
                </label>
                <label>
                    Email
                    <Validation.Input placeholder='' name='email' validations={[
                        {
                            rule: 'isRequired'
                        },
                        {
                            rule: 'isEmail'
                        }
                    ]} />
                </label>
                <label>
                    Send me all news
                    <input type='checkbox' name='sendAll' value='1'/>
                </label>
                <br/>
                <button type='submit' value='subscribe'>Subscribe</button>
            </Validation.Form>
        );
    }
});

module.exports = Subscribe;