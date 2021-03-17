import { gql } from 'apollo-server-express';

export default gql`
  type Hotel {
    id: Int
    name: String
    city: String
    country: String
    rating: Int
    description: String
  }

  type Room {
    id: Int
    hotel_id: Int
    room_no: Int
    no_of_beds: Int
    price_per_night: Float
  }

  type RoomAndHotel {
    id: Int
    room_no: Int
    no_of_beds: Int
    price_per_night: Float
    hotel: Hotel
  }

  input HotelOptions {
    name: String
    city: String
    country: String
    rating: Int
    description: String
  }

  input RoomOptions {
    hotel_id: Int
    room_no: Int
    no_of_beds: Int
    price_per_night: Float
  }

  type Query {
    hello: String
    getHotels: [Hotel]
    getHotelById(id: ID!): Hotel
    getRooms: [Room]
    getRoomById(id: ID!): RoomAndHotel
  }

  type Mutation {
    createHotel(options: HotelOptions!): Hotel
    updateHotel(id: ID!, options: HotelOptions!): Hotel
    deleteHotel(id: ID!): String
  }
`;
