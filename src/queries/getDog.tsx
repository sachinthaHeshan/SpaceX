import { gql } from '@apollo/client';

export const query = gql`
{
  launchesPast(limit: 10) {
    id
    mission_name
  }
}
`
