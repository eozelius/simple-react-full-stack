import React from 'react';
import { Pane, Heading, Button } from 'evergreen-ui';

const Header = () => (
  <Pane display="flex" padding={16} background="tint2">
    <Pane flex={1} alignItems="center" display="flex">
      <Heading size={600}>Lambda Fleet</Heading>
    </Pane>
    <Pane>
      <Button marginRight={16}>Button</Button>
      <Button appearance="primary">Primary Button</Button>
    </Pane>
  </Pane>
);

export default Header;
