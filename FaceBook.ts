class Education {
  constructor(
    private primarySchool: string,
    private highSchool: string,
    private college: string
  ) {
    this.primarySchool = primarySchool;
    this.highSchool = highSchool;
    this.college = college;
  }
}

class SocialLinks {
  constructor(
    private linkedIn: string,
    private twitter: string,
    private gitHub: string,
    private website: string
  ) {
    this.linkedIn = linkedIn;
    this.twitter = twitter;
    this.gitHub = gitHub;
    this.website = website;
  }
}

class Profile {
  userName: string;
  mobilePhone: string;
  relationShipStatus: string;
  gender: string;
  profileId: number;
  picture: string;
  education: Education;
  address: string;
  birthDay: string;
  socialLinks: SocialLinks;
  work: string[];
  primaryEmail: string;
  secondaryEmail: string;
  aboutUser: string;
  lifeEvents: string[];

  constructor(
    userName: string,
    mobilePhone: string,
    relationShipStatus: string,
    gender: string,
    profileId: number,
    picture: string,
    education: Education,
    address: string,
    birthDay: string,
    socialLinks: SocialLinks,
    work: string[],
    primaryEmail: string,
    secondaryEmail: string,
    aboutUser: string,
    lifeEvents: string[]
  ) {
    this.userName = userName;
    this.mobilePhone = mobilePhone;
    this.relationShipStatus = relationShipStatus;
    this.gender = gender;
    this.profileId = profileId;
    this.picture = picture;
    this.education = education;
    this.address = address;
    this.birthDay = birthDay;
    this.socialLinks = socialLinks;
    this.work = work;
    this.primaryEmail = primaryEmail;
    this.secondaryEmail = secondaryEmail;
    this.aboutUser = aboutUser;
    this.lifeEvents = lifeEvents;
  }

  //getters

  public getUserName(): string {
    return this.userName;
  }
  public getMobilePhone(): string {
    return this.mobilePhone;
  }
  public getUserRelationshipStatus(): string {
    return this.relationShipStatus;
  }
  public getGender(): string {
    return this.gender;
  }
  public getProfileId(): number {
    return this.profileId;
  }
  public getPicture(): string {
    return this.picture;
  }
  public getEducation(): Education {
    return this.education;
  }
  public getAddress(): string {
    return this.address;
  }
  public getBirthday(): string {
    return this.birthDay;
  }
  public getSocialLinks(): SocialLinks {
    return this.socialLinks;
  }
  public getWork(): string[] {
    return this.work;
  }

  public getPrimaryEmail(): string {
    return this.primaryEmail;
  }

  public getSecondaryEmail(): string {
    return this.secondaryEmail;
  }
  public getAboutUser(): string {
    return this.aboutUser;
  }
  public getLifeEvents(): string[] {
    return this.lifeEvents;
  }

  //setters

  public setUserName(userName: string) {
    this.userName = userName;
  }
  public setMobilePhone(mobilePhone: string) {
    return (this.mobilePhone = mobilePhone);
  }
  public setUserRelationshipStatus(relationShipStatus: string) {
    return (this.relationShipStatus = relationShipStatus);
  }
  public setGender(gender: string) {
    return (this.gender = gender);
  }
  public setProfileId(profileId: number) {
    return (this.profileId = profileId);
  }
  public setPicture(picture: string) {
    return (this.picture = picture);
  }
  public setEducation(education: Education) {
    return (this.education = education);
  }
  public setAddress(address: string): string {
    return (this.address = address);
  }
  public setBirthday(birthDay: string) {
    return this.birthDay;
  }
  public setSocialLinks(socialLinks: SocialLinks) {
    return (this.socialLinks = socialLinks);
  }
  public setWork(work: string[]) {
    return (this.work = work);
  }

  public setPrimaryEmail(primaryEmail: string) {
    return (this.primaryEmail = primaryEmail);
  }

  public setSecondaryEmail(secondaryEmail: string) {
    return (this.secondaryEmail = secondaryEmail);
  }
  public setAboutUser(aboutUser: string) {
    this.aboutUser = aboutUser;
  }
  public setLifeEvents(lifeEvents: string[]) {
    this.lifeEvents = lifeEvents;
  }
}

//Instance creation of Social class
let education = new Education("abc primary school", "def high school", "");
let socialLinks = new SocialLinks(
  "linkedin.com",
  "twitter.com",
  "github.com",
  "newwebsite.com"
);
let works: string[] = ["jobA", "jobB", "jobC"];
let lifeEvents: string[] = ["born", "enjoyed life", "death"];

let myProfile = new Profile(
  "newUser",
  "123456789",
  "single",
  "male",
  1021456923145698,
  "http://demourl.com",
  education,
  "abc street kolkata",
  "19/12/1995",
  socialLinks,
  works,
  "abc@gmail.com",
  "def@gmail.com",
  "A good person",
  lifeEvents
);

console.log(myProfile);
