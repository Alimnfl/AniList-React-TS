import { gql } from '@apollo/client';

export const GET_TRENDING_ANIME = gql`
  query ($page: Int!, $perPage: Int!, $type: MediaType!, $sort: [MediaSort!]) {
    Page(page: $page, perPage: $perPage) {
      media(type: $type, sort: $sort) {
        id
        title {
          romaji
        }
        coverImage {
          extraLarge
          large
        }
      }
    }
  }
`;
