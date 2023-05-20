const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  // ... other webpack configuration options ...
  plugins: [
    // ... other plugins ...
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Style Script'}, // Replace with the Google Font you want to use
        // Add more fonts if needed
      ],
      // Use 'subset' option if you want to include specific font subsets (e.g., 'latin', 'latin-ext')
      // subsets: ['latin'],
      // Use 'formats' option if you want to specify additional font file formats
      // formats: ['woff2', 'woff'],
    }),
  ],
};