'use strict';

$(document).ready(function () {
  var _window$ReactLeaflet = window.ReactLeaflet,
      Map = _window$ReactLeaflet.Map,
      TileLayer = _window$ReactLeaflet.TileLayer,
      Marker = _window$ReactLeaflet.Marker,
      Popup = _window$ReactLeaflet.Popup;

  var position = [25.122959, -80.917964];

  var App = React.createClass({
    displayName: 'App',

    render: function render() {
      return React.createElement(
        Map,
        { center: position, zoom: 8 },
        React.createElement(TileLayer, {
          url: 'https://api.mapbox.com/styles/v1/nathanlawrence/cj7dsc9j815p02spkufl6xrdt/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF0aGFubGF3cmVuY2UiLCJhIjoiY2l5dzl5NDA4MDAxeTJxcWU3NTVwaHBsMyJ9.kNUj23zWfRJNLl2W8hsAyA'

        }),
        React.createElement(
          Marker,
          { position: position },
          React.createElement(
            Popup,
            null,
            React.createElement(
              'span',
              null,
              'A pretty CSS3 popup.',
              React.createElement('br', null),
              'Easily customizable.'
            )
          )
        )
      );
    }
  });

  console.log($(document));

  ReactDOM.render(React.createElement(App, null), document.getElementById('react-target'));
});