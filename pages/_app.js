import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/index.css";
import client from "../apollo-client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
