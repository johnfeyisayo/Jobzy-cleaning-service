import React, { useState } from 'react';

function Services() {
  const [images, setImages] = useState(
    [
      {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2pm',
        reminder: true,
    },
  ]);

  return (
    <div>
      <h1>Hi you&apos;re at the Services page</h1>
    </div>
  )
}

export default Services
