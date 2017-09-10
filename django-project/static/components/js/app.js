$(document).ready(function() {

    const { Map, TileLayer, Marker, Popup } = window.ReactLeaflet;
    const position = [25.122959, -80.917964];

    var App = React.createClass({
        render: function(){
            return (<Map center={position} zoom={8}>
                <TileLayer
                    url='https://api.mapbox.com/styles/v1/nathanlawrence/cj7dsc9j815p02spkufl6xrdt/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF0aGFubGF3cmVuY2UiLCJhIjoiY2l5dzl5NDA4MDAxeTJxcWU3NTVwaHBsMyJ9.kNUj23zWfRJNLl2W8hsAyA'

                />
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                    </Popup>
                </Marker>
            </Map>)
        }
    });


    ReactDOM.render(<App/>, document.getElementById('react-target'));
});