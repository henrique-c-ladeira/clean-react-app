import React from 'react';
import { BoxContent, Button, Typography } from '~/presentation/components';
import { Card } from '~/presentation/components/card/card';

export const ProjectCard: React.FC = () => (
  <Card center>
    <Typography variant="bodySmall">
      This is an open source project <br />
      focused on clean architecture
    </Typography>
    <BoxContent h={10} />
    <Button
      title="GitHub Project"
      onClick={() =>
        window.location.assign(
          'https://github.com/henrique-c-ladeira/clean-react-app'
        )
      }
    />
  </Card>
);
