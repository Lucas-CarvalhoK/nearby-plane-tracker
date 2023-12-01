import * as S from "./styles";
import { MainPageProps } from "./types";
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';

const MainPage = ({ children }: MainPageProps) => {
  const position = [-1.450156430978141, -48.47770955088359]
  const plane = [-1.307839, -48.461546]
  const plane2 = [-1.694129, -48.562222]

  const fillBlueOptions = { fillColor: 'blue' }
  const planeColor = { color: 'purple' }
  const plane2Color = { color: 'red' }

  return (
    <S.Border>
      <MapContainer center={position} zoom={8} scrollWheelZoom={false} style={{ height: '400px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Circle center={position} pathOptions={fillBlueOptions} radius={85747} />
        <Circle center={plane} pathOptions={planeColor} radius={200} />
        <Circle center={plane2} pathOptions={plane2Color} radius={200} />
      </MapContainer>
    </S.Border>
  )
}

export default MainPage;
