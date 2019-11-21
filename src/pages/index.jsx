import React from 'react';
import { H4, H5, H6, H1, H2, H3, P1, P2, Button } from '../components';
import Layout from '../layout';

export default function Counter() {
  return (
    <Layout>
      <div style={{ gridColumn: 'span 6' }}>
        <H1 text="Unacademy H1" />
      </div>
      <div style={{ gridColumn: 'span 6' }}>
        <H2 text="Unacademy H2" />
      </div>
      <div style={{ gridColumn: 'span 6' }}>
        <H3 text="Unacademy H3" />
      </div>
      <div style={{ gridColumn: 'span 6' }}>
        <H4 text="Unacademy H4" />
      </div>
      <div style={{ gridColumn: 'span 6' }}>
        <H5 text="Unacademy H5" />
      </div>
      <div style={{ gridColumn: 'span 6' }}>
        <H6 text="Unacademy H6" />
      </div>
      <div style={{ gridColumn: 'span 6' }}>
        <P1 text="Unacademy P1" />
      </div>
      <div style={{ gridColumn: 'span 3' }}>
        <P2 text="Unacademy P2" />
      </div>
      <div style={{ gridColumn: 'span 6' }}>
        <Button
          label="Unacademy button"
          onClick={() => {
            console.log('Button is clicked');
          }}
        />
      </div>
    </Layout>
  );
}
