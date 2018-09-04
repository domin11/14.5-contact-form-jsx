var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem col-12'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'http://icons.veryicon.com/png/System/Qetto%202/contacts.png'
        }),
        React.createElement('p', {className: 'contactLabel col-3'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel col-3'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail col-3', href: 'mailto:' + this.props.item.email},
          this.props.item.email
        )
      )
    )
  },
});