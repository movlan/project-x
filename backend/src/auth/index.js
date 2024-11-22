import { auth } from 'express-oauth2-jwt-bearer';

const jwtCheck = auth({
  audience: 'https://blog.bahram.dev',
  issuerBaseURL: 'https://movlan.us.auth0.com/',
  tokenSigningAlg: 'RS256',
});

export default jwtCheck;
