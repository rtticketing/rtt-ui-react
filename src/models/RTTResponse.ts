export interface RTTSeat {
  seat_id: string; // A04
  available: boolean;
  popularity: number;
}

export interface RTTResponse {
  connection: number;
  seats: Array<RTTSeat>;
}
