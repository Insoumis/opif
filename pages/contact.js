import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
import _ from 'lodash';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      emailError: false,
      bodyError: false,
      feedback: '',
    };
  }

  testEmail() {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(this.email.value);
  }

  sendEmail() {
    if (this.state.feedback != 'loading') {
      this.setState({
        emailError: false,
        bodyError: false,
      });

      let valid = true;
      if (_.isEmpty(this.email.value.trim()) || !this.testEmail()) {
        valid = false;
        this.setState({
          emailError: true
        });
      }

      if (_.isEmpty(this.body.value.trim())) {
        valid = false;
        this.setState({
          bodyError: true
        });
      }

      if (valid) {
        this.setState({ feedback: 'loading' });
        emailjs.init('user_47xPtqaJi5efTmlc09CXk');
        emailjs.send('default_service','opif_contact', {
          email: this.email.value,
          body: this.body.value
        })
        .then(() => {
          this.email.value = '';
          this.body.value = '';
          this.setState({ feedback: 'success'});
        }, () => this.setState({ feedback: 'error' }));
      }
    }
  }

  render() {
    return (
      <Container className="contact">
        <Row>
          <h2>Contactez l'Opif !</h2>
          <form className="clearfix" onSubmit={() => this.sendEmail()}>
            <fieldset className={(this.state.emailError) ? 'error' : ''}>
              <label>Email</label>
              <input ref={(node) => this.email = node} type="text" name="email" />
            </fieldset>
            <fieldset className={(this.state.bodyError) ? 'error' : ''}>
              <label>Message</label>
              <textarea ref={(node) => this.body = node} name="body" id="body"></textarea>
            </fieldset>
            <div className={`feedback ${this.state.feedback}`}>
              {(this.state.feedback == 'loading') ?
                <i className="fa fa fa-spinner fa-spin"></i>
              : false}
              {(this.state.feedback == 'success') ?
                <span><i className="fa fa-check" aria-hidden="true"></i> Votre message a bien été envoyé !</span>
              : false}
              {(this.state.feedback == 'error') ?
                <span><i className="fa fa-times" aria-hidden="true"></i> Un erreur est survenue, veuillez réessayer.</span>
              : false}
            </div>
            <button type="button" onClick={() => this.sendEmail()}>Envoyer</button>
          </form>
        </Row>
      </Container>
    );
  }
}

export default Contact;
