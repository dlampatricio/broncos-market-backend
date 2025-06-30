module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET'),
      },
      actionOptions: {
        upload: {
          folder: env('CLOUDINARY_FOLDER', 'strapi_uploads'), // Opcional: organiza en carpetas
          use_filename: true, // Mantiene el nombre original
          unique_filename: false,
          overwrite: false,
        },
        delete: {},
      },
    },
  },
});