/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URL:
      'mongodb+srv://root:toor@db-craftify.ekbe3cr.mongodb.net/?retryWrites=true&w=majority',
    NEXTAUTH_SECRET: 'craftify',
  },
};

module.exports = nextConfig;
