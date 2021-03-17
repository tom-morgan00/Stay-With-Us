import db from '../../db';

export default {
  Query: {
    getRooms: async () => {
      const rooms = db('room').select('*');

      return rooms;
    },
    getRoomById: async (_, { id }) => {
      const [room] = await db('room').select('*').where({ id });

      const [hotel] = await db('hotel')
        .select('*')
        .where({ id: room.hotel_id });

      const roomAndHotel = {
        id: room.id,
        room_no: room.room_no,
        no_of_beds: room.no_of_beds,
        price_per_night: room.price_per_night,
        hotel,
      };

      return roomAndHotel;
    },
  },
  Mutation: {},
};
