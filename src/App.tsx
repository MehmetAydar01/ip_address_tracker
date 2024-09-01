import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
import { type LatLngExpression } from 'leaflet';
import type { GeoApiResponse } from './types';
import { SearchLocation, ChangeView, LocationInfo } from './components';
import markicon from './assets/images/icon-location.svg';
import { toast } from 'react-toastify';

function App() {
  const [position, setPosition] = useState<LatLngExpression>([
    34.08057, -118.07285,
  ]);
  const [value, setValue] = useState('192.212.174.101');
  const [geoApiData, setGeoApiData] = useState<GeoApiResponse[]>([]);

  // Marker Icon
  const markerIcon = L.icon({
    iconUrl: markicon,
  });

  // Fetch Location Data
  const fetchLocation = async (): Promise<void> => {
    try {
      const res = await axios.get<GeoApiResponse>(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_jpelESHEoQ7oQyJzXkPBV4MjBGiKZ&ipAddress=${value}`
      );
      setGeoApiData([res.data]);

      const lat = res.data.location.lat;
      const lng = res.data.location.lng;
      setPosition([lat, lng]);
    } catch (error) {
      const err = error as Error;
      console.log(err.message);
      toast.error('Please Enter Correct Values');
    }
  };

  useEffect(() => {
    fetchLocation();
  }, [value]);

  // Submit Form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = e.currentTarget[0] as HTMLInputElement;
    setValue(inputValue.value || value);
  };

  console.log(position.toString());

  return (
    <div className='relative'>
      {/* SEARCH FORM */}
      <SearchLocation handleSubmit={handleSubmit} />

      {/* MAP */}
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        className='w-full h-[50rem]'
      >
        <ChangeView position={position} zoom={17} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={markerIcon} alt={position.toString()}>
          <Popup>Your Location is here</Popup>
        </Marker>
        <span className='sr-only'>location is {position.toString()}</span>
      </MapContainer>

      {/* LOCATION INFO */}
      <LocationInfo data={geoApiData} />
    </div>
  );
}

export default App;
