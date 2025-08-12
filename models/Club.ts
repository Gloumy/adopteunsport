export class ClubDTO {
  nom = "";
  latitude = 0;
  longitude = 0;
  adress = '';
  website = '';
  sport = '';
  phoneNumber = '';
  email = '';
}

export class Club extends ClubDTO {
  constructor(dto = new ClubDTO()) {
    super();
    Object.assign(this, dto);
  }
}
