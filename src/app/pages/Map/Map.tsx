import React from 'react';
import ActionButton from '~/app/components/ActionButton';
import Separator from '~/app/components/Separator';
import { useNavigation } from '~/app/shared/router/router.hook';
import mapImage from '../../../assets/images/map.png';

const MapPage = () => {
  const { goBack } = useNavigation();

  return (
    <div style={{ paddingBottom: '50px' }}>
      <ActionButton label="돌아가기" onClick={() => goBack()} />
      <Separator height="20px" />
      <img src={mapImage} alt="charis camp map" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default MapPage;
