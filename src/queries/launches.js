import { gql  } from '@apollo/client';

const query = gql`
{
  launchesPast(limit: 10) {
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
export default query;
