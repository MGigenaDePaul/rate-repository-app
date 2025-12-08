import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories{
        edges {
            node {
                id
                ownerAvatarUrl
                fullName
                description
                language
                stargazersCount
                forksCount
                reviewCount
                ratingAverage
            }
        }
    }
}
`;

export const ME = gql`
    query{
        me {
            id
            username
        }
    }`;

export const GET_REPOSITORY = gql`
    query Repository($repositoryId: ID!) {
    repository(id: $repositoryId){
        id
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
        url
        reviews {
        edges {
            node {
            id
            text
            rating
            createdAt
            user {
                id
                username
            }
            }
        }
        }
    }
}`;
