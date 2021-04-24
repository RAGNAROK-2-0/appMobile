import React from 'react';
import {View, TextInput, Button} from 'react-native';

import {Container, Text, Ctext} from './styles';

function Background({children, color}) {
  return (
    <Container>
      {color ? (
        <>
          <Ctext data={color}>
            <Text>{children}</Text>
          </Ctext>
        </>
      ) : null}

      <Ctext>
        <Text>{'botão'}</Text>
      </Ctext>
    </Container>
  );
}

export default Background;
