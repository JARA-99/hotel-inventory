export interface IRooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface IRoomList {
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
}
