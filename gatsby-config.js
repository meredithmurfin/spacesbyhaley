module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-stylelint',
      options: { files: ['**/*.{js,jsx,ts,tsx}'] },
    },
  ],
  siteMetadata: {
    title: 'Spaces by Haley',
    author: 'Meredith Murfin',
    description:
      'Home organization services aiming to make your space more fresh and functional.',
    tagLine: 'Organization that works',
    siteUrl: 'https://spacesbyhaley.com',
    social: {
      facebook: 'https://m.facebook.com/Spaces-by-Haley-105707784852717/',
      instagram: 'https://instagram.com/spacesbyhaley?igshid=c9t7e3t17opm/',
      pinterest: 'https://pinterest.com/haleyledwitch/_saved/',
      github: 'https://github.com/meredithmurfin/spacesbyhaley',
    },
    contact: {
      inquire:
        'https://docs.google.com/forms/d/e/1FAIpQLSfXEuxM6z_wfwKvPaNxwlu1odorcUsnjRRdDmI5qmUm_-OBrw/viewform',
      email: 'mailto:haleyledwitch@gmail.com',
      phone: '770-403-8227',
    },
  },
};
