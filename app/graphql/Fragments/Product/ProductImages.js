export const IMAGES_FRAGMENT = `#graphql
  fragment Images on ImageConnection {
    nodes{
        ...Image
    }
  }
`;