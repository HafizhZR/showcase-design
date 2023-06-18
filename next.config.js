/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URL:
      'mongodb+srv://craftify:nI23ZijHMk2qUcEC@craftify.fwpsz0u.mongodb.net/?retryWrites=true&w=majority',
    NEXTAUTH_SECRET: 'craftify',
  },
};

module.exports = nextConfig;
