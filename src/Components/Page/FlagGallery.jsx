import React, { useEffect, useState } from 'react';

const FlagGallery = () => {
  const [flagData, setFlagData] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/peru')
      .then((res) => res.json())
      .then((data) => setFlagData(data[0]));
  }, []);

  return <div>Voila {flagData && flagData.name.common} </div>;
};

export default FlagGallery;
