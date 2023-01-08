/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "anger.github.io",
      "cdn.discordapp.com"
    ],
  },
  async redirects() {
    return [
      {
        source: "/puppycrush",
        destination: "https://anger.github.io/puppycrush/",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/",
        permanent: false,
      },
    ]
  },
}
