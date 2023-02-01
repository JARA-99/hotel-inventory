import { Component } from '@angular/core';
import { IRoomList, IRooms } from 'src/app/core/rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  title: string = 'Hotel Inventory';
  numberOfRooms: number = 10;
  hideRooms: boolean = false;

  rooms: IRooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: IRoomList[] = [
    {
      roomNumber: 225,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free wi-fi, Smart Tv, Bathroom, Kitchen',
      price: 1500,
      photos: '../../src/assets/img/room-1.png',
      checkinTime: new Date('10-Nov-2022'),
      checkoutTime: new Date('20-Nov-2022'),
    },

    {
      roomNumber: 305,
      roomType: 'Private Room',
      amenities: 'Air conditioner, Free wi-fi, Smart Tv, Bathroom, Kitchen',
      price: 1800,
      photos: '../../src/assets/img/room-2.png',
      checkinTime: new Date('5-Dec-2022'),
      checkoutTime: new Date('15-Dec-2022'),
    },

    {
      roomNumber: 182,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free wi-fi, Smart Tv, Bathroom, Kitchen',
      price: 2400,
      photos: '../../src/assets/img/room-3.png',
      checkinTime: new Date('10-Oct-2022'),
      checkoutTime: new Date('20-Oct-2022'),
    },

    {
      roomNumber: 380,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free wi-fi, Smart Tv, Bathroom, Kitchen',
      price: 5000,
      photos: '../../src/assets/img/room-4.png',
      checkinTime: new Date('10-Sep-2022'),
      checkoutTime: new Date('20-Sep-2022'),
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
