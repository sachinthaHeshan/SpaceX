import { gql } from '@apollo/client';

export const query = gql`
query launchesPast($offset: Int!) {
  launchesPast(limit: 10, offset: $offset) {
    mission_name
    links {
      flickr_images
    }
    launch_date_local
    rocket {
      rocket_name
    }
    launch_success
    details
    id
  }
}
`

