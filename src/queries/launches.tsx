import { gql } from '@apollo/client';

export const query = gql`
query launchesPast($offset: Int!) {
  launchesPast(limit: 10, offset: $offset) {
    id
    mission_name
    launch_date_local
    launch_success
    details
    links {
      flickr_images
    }
    rocket {
      rocket_name
    }
  }
}
`

