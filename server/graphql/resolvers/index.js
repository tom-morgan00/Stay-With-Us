import HotelResolver from './HotelResolver';
import RoomResolver from './RoomResolver';

export default {
  Query: {
    hello: () => 'Hello World!',
    ...HotelResolver.Query,
    ...RoomResolver.Query,
  },
  Mutation: {
    ...HotelResolver.Mutation,
    ...RoomResolver.Mutation,
  },
};
