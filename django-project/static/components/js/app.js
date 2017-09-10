$(document).ready(function() {

    const { Map, TileLayer, Marker, Popup } = window.ReactLeaflet;
    const position = [25.122959, -80.917964];

    var App = React.createClass({
        getInitialState: function (){

            let allSignals = [];
            let signalTypes = [];

            for (var typeSlug in window.signalsByType){
                var type = window.signalsByType[typeSlug];

                signalTypes.push({
                    name: type.name,
                    slug: typeSlug
                });


                for (var j=0; j < type.signals.length; j++){
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
        render: function(){
            return (<Map center={position} zoom={8}>
                <TileLayer
                    url='https://api.mapbox.com/styles/v1/nathanlawrence/cj7dsc9j815p02spkufl6xrdt/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF0aGFubGF3cmVuY2UiLCJhIjoiY2l5dzl5NDA4MDAxeTJxcWU3NTVwaHBsMyJ9.kNUj23zWfRJNLl2W8hsAyA'
                />

                {this.state.displayedSignals.map(function(x,i){
                    return <Marker position={[x.lat, x.long]}>
                        <Popup>
                            <div className="popup-content">
                                <h2>{x.date_time}</h2>

                                {x.embed_code &&
                                <iframe frameBorder={0}
                                        src={x.embed_url} width="100%" height="400px" ></iframe>}
                                {!x.embed_code &&
                                <div class="info">
                                    <p className="pullquote">{x.pull_quote}</p>
                                    <p className="sourcePost"><a href="#" target="_blank">
                                        {x.source_user} on {x.social_network}
                                    </a></p></div>}
                            </div>
                        </Popup>
                    </Marker>;
                })}
            </Map>)
        }
    });


    ReactDOM.render(<App/>, document.getElementById('react-target'));
});