import type { LatLngExpression } from 'leaflet';
import { useMap } from 'react-leaflet';

type ChangeViewProps = {
  position: LatLngExpression;
  zoom: number;
};

function ChangeView({ position, zoom }: ChangeViewProps) {
  const map = useMap();
  map.setView(position, zoom);

  return null;
}

export default ChangeView;
