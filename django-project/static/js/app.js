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

        getInitialState: function getInitialState() {

            var allSignals = [];
            var signalTypes = [];

            for (var typeSlug in window.signalsByType) {
                var type = window.signalsByType[typeSlug];

                signalTypes.push({
                    name: type.name,
                    slug: typeSlug
                });

                for (var j = 0; j < type.signals.length; j++) {
                    allSignals.push(type.signals[j]);
                }
            }

            return {
                signalsByType: window.signalsByType,
                allSignals: allSignals,
                displayedSignals: allSignals,
                signalTypes: signalTypes,
                targetedSignalType: '*'
            };
        },
        render: function render() {
            return React.createElement(
                Map,
                { center: position, zoom: 8 },
                React.createElement(TileLayer, {
                    url: 'https://api.mapbox.com/styles/v1/nathanlawrence/cj7dsc9j815p02spkufl6xrdt/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF0aGFubGF3cmVuY2UiLCJhIjoiY2l5dzl5NDA4MDAxeTJxcWU3NTVwaHBsMyJ9.kNUj23zWfRJNLl2W8hsAyA'
                }),
                this.state.displayedSignals.map(function (x, i) {
                    return React.createElement(
                        Marker,
                        { position: [x.lat, x.long] },
                        React.createElement(
                            Popup,
                            { maxWidth: 500 },
                            React.createElement(
                                'div',
                                { className: 'popup-content' },
                                React.createElement(
                                    'h2',
                                    null,
                                    x.date_time
                                ),
                                React.createElement('iframe', { frameBorder: 0,
                                    src: x.embed_url, width: '100%', height: '400px' })
                            )
                        )
                    );
                })
            );
        }
    });

    ReactDOM.render(React.createElement(App, null), document.getElementById('react-target'));
});