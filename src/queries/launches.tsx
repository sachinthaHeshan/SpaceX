import { gql } from '@apollo/client';

export const query = gql`
query launchesPast($offset: Int!, $search: String) {
  launchesPast(limit: 10, offset: $offset, find: {mission_name: $search}) {
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
  dataCount: launchesPast(find: {mission_name: $search}) {
    id
  }
}
`

