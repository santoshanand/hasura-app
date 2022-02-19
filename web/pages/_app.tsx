import { ChakraProvider } from '@chakra-ui/react';
import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostAuthProvider } from "@nhost/react-auth";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { nhost } from "../utils/nhost";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NhostAuthProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </NhostApolloProvider>
    </NhostAuthProvider>
  );
}
export default MyApp;
