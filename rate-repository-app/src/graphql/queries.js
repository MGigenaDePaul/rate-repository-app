import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`

query Repositories(
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection, 
    $searchKeyword: String
    ) {
        repositories(
            orderBy: $orderBy, 
            orderDirection: $orderDirection, 
            searchKeyword: $searchKeyword
        ) {
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

export const GET_CURRENT_USER = gql`
    query getCurrentUser($includeReviews: Boolean = false) {
        me {
        id
        username
        reviews @include(if: $includeReviews) {
            edges {
            node {
                id
                rating
                createdAt
                text
                repository {
                    id
                    fullName
                }
            }
            }
        }
        
        }
    }`;
