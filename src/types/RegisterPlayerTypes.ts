type PlayingRole =
  | "BATSMAN"
  | "BOWLER"
  | "ALL_ROUNDER"
  | "WICKET_KEEPER";

export type RegisterPlayerFormValue = {
    fullName: string;
    phone: string;
    dob: string;
    playingRole: PlayingRole | '';
    village: string;
}