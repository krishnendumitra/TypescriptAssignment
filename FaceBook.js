var Education = /** @class */ (function () {
    function Education(primarySchool, highSchool, college) {
        this.primarySchool = primarySchool;
        this.highSchool = highSchool;
        this.college = college;
        this.primarySchool = primarySchool;
        this.highSchool = highSchool;
        this.college = college;
    }
    return Education;
}());
var SocialLinks = /** @class */ (function () {
    function SocialLinks(linkedIn, twitter, gitHub, website) {
        this.linkedIn = linkedIn;
        this.twitter = twitter;
        this.gitHub = gitHub;
        this.website = website;
        this.linkedIn = linkedIn;
        this.twitter = twitter;
        this.gitHub = gitHub;
        this.website = website;
    }
    return SocialLinks;
}());
var Profile = /** @class */ (function () {
    function Profile(userName, mobilePhone, relationShipStatus, gender, profileId, picture, education, address, birthDay, socialLinks, work, primaryEmail, secondaryEmail, aboutUser, lifeEvents) {
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
    Profile.prototype.getUserName = function () {
        return this.userName;
    };
    Profile.prototype.getMobilePhone = function () {
        return this.mobilePhone;
    };
    Profile.prototype.getUserRelationshipStatus = function () {
        return this.relationShipStatus;
    };
    Profile.prototype.getGender = function () {
        return this.gender;
    };
    Profile.prototype.getProfileId = function () {
        return this.profileId;
    };
    Profile.prototype.getPicture = function () {
        return this.picture;
    };
    Profile.prototype.getEducation = function () {
        return this.education;
    };
    Profile.prototype.getAddress = function () {
        return this.address;
    };
    Profile.prototype.getBirthday = function () {
        return this.birthDay;
    };
    Profile.prototype.getSocialLinks = function () {
        return this.socialLinks;
    };
    Profile.prototype.getWork = function () {
        return this.work;
    };
    Profile.prototype.getPrimaryEmail = function () {
        return this.primaryEmail;
    };
    Profile.prototype.getSecondaryEmail = function () {
        return this.secondaryEmail;
    };
    Profile.prototype.getAboutUser = function () {
        return this.aboutUser;
    };
    Profile.prototype.getLifeEvents = function () {
        return this.lifeEvents;
    };
    //setters
    Profile.prototype.setUserName = function (userName) {
        this.userName = userName;
    };
    Profile.prototype.setMobilePhone = function (mobilePhone) {
        return this.mobilePhone = mobilePhone;
    };
    Profile.prototype.setUserRelationshipStatus = function (relationShipStatus) {
        return this.relationShipStatus = relationShipStatus;
    };
    Profile.prototype.setGender = function (gender) {
        return this.gender = gender;
    };
    Profile.prototype.setProfileId = function (profileId) {
        return this.profileId = profileId;
    };
    Profile.prototype.setPicture = function (picture) {
        return this.picture = picture;
    };
    Profile.prototype.setEducation = function (education) {
        return this.education = education;
    };
    Profile.prototype.setAddress = function (address) {
        return this.address = address;
    };
    Profile.prototype.setBirthday = function (birthDay) {
        return this.birthDay;
    };
    Profile.prototype.setSocialLinks = function (socialLinks) {
        return this.socialLinks = socialLinks;
    };
    Profile.prototype.setWork = function (work) {
        return this.work = work;
    };
    Profile.prototype.setPrimaryEmail = function (primaryEmail) {
        return this.primaryEmail = primaryEmail;
    };
    Profile.prototype.setSecondaryEmail = function (secondaryEmail) {
        return this.secondaryEmail = secondaryEmail;
    };
    Profile.prototype.setAboutUser = function (aboutUser) {
        this.aboutUser = aboutUser;
    };
    Profile.prototype.setLifeEvents = function (lifeEvents) {
        this.lifeEvents = lifeEvents;
    };
    return Profile;
}());
//Instance creation of Social class
var education = new Education("abc primary school", "def high school", "");
var socialLinks = new SocialLinks("linkedin.com", "twitter.com", "github.com", "newwebsite.com");
var works = ["jobA", "jobB", "jobC"];
var lifeEvents = ["born", "enjoyed life", "death"];
var myProfile = new Profile("newUser", "123456789", "single", "male", 1021456923145698, "http://demourl.com", education, "abc street kolkata", "19/12/1995", socialLinks, works, "abc@gmail.com", "def@gmail.com", "A good person", lifeEvents);
console.log(myProfile);
