var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
		<div className={'contactItem col-12'}>
			<img className={'contactImage'} src={'http://icons.veryicon.com/png/System/Qetto%202/contacts.png'}/>
			<p className={'contactLabel col-3'}>
				Imię: {this.props.item.firstName}
			</p>
			<p className={'contactLabel col-3'}>
				Nazwisko: {this.props.item.lastName}
			</p>
			<a className={'contactEmail col-3'} href={'mailto:' + this.props.item.email}>
				{this.props.item.email}
			</a>
		</div>
    )
  },
});