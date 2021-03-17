import db from '../../db';

export default {
  Query: {
    // GET ALL HOTELS
    getHotels: async () => {
      const hotels = await db('hotel').select('*');
      return hotels;
    },
    // GET ONE HOTEL
    getHotelById: async (_, { id }) => {
      const [hotel] = await db('hotel').select('*').where({ id });
      return hotel;
    },
  },
  Mutation: {
    // CREATE NEW HOTEL
    createHotel: async (_, { options }) => {
      const [hotel] = await db('hotel')
        .insert({
          name: options.name,
          city: options.city,
          country: options.country,
          rating: options.rating,
          description: options.description,
        })
        .returning('*');
      // console.log(hotel);
      return hotel;
    },
    // UPDATE HOTEL
    updateHotel: async (_, { id, options }) => {
      const [hotel] = await db('hotel')
        .where({ id })
        .update({
          name: options.name,
          city: options.city,
          country: options.country,
          rating: options.rating,
          description: options.description,
        })
        .returning('*');
      // console.log(hotel);
      return hotel;
    },
    // DELETE HOTEL
    deleteHotel: async (_, { id }) => {
      await db('hotel').where({ id }).del();

      return 'Successfully deleted hotel!';
    },
  },
};
