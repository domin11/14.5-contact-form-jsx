var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
		<form className={'contactForm'}>
			<input className={'form-control'} type='text' placeholder='Imię' value={this.props.contact.firstName} />
			<input className={'form-control'} type='text' placeholder='Nazwisko' value={this.props.contact.lastName} />
			<input className={'form-control'} type='text' placeholder='Email' value={this.props.contact.email} />
			<button className={'btn btn-light'} type='submit'>'Dodaj kontakt'</button>
		</form>
    )
  },
})
