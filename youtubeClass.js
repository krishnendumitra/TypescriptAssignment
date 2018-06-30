var Comments = /** @class */ (function () {
    function Comments(userName, date, description, likeCount, dislikeCount, replyCount) {
        this.userName = userName;
        this.date = date;
        this.description = description;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.replyCount = replyCount;
    }
    return Comments;
}());
var Video = /** @class */ (function () {
    function Video(id, title, uploadedBy, duration, subtitle, viewCount, likeCount, dislikeCount, subscriberCount, notificationSunscriberCount, description, dateOfPublish, category, license) {
        this.resolution = [144, 240, 360, 480, 720, 1080];
        this.comments = [];
        this.id = id;
        this.title = title;
        this.uploadedBy = uploadedBy;
        this.duration = duration;
        this.subtitle = subtitle;
        this.viewCount = viewCount;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.subscriberCount = subscriberCount;
        this.notificationSunscriberCount = notificationSunscriberCount;
        this.description = description;
        this.dateOfPublish = dateOfPublish;
        this.category = category;
        this.license = license;
    }
    //getters
    Video.prototype.getId = function () {
        return this.id;
    };
    Video.prototype.getTitle = function () {
        return this.title;
    };
    Video.prototype.getUploadedBy = function () {
        return this.uploadedBy;
    };
    Video.prototype.getDuration = function () {
        return this.duration;
    };
    Video.prototype.getSubtitle = function () {
        return this.subtitle;
    };
    Video.prototype.getResolution = function () {
        return this.resolution;
    };
    Video.prototype.getViewCount = function () {
        return this.viewCount;
    };
    Video.prototype.getLikeCount = function () {
        return this.likeCount;
    };
    Video.prototype.getDislikeCount = function () {
        return this.dislikeCount;
    };
    Video.prototype.getSubscriberCount = function () {
        return this.subscriberCount;
    };
    Video.prototype.getNotificationSunscriberCount = function () {
        return this.notificationSunscriberCount;
    };
    Video.prototype.getDescription = function () {
        return this.description;
    };
    Video.prototype.getDateOfPublish = function () {
        return this.dateOfPublish;
    };
    Video.prototype.getCategory = function () {
        return this.category;
    };
    Video.prototype.getLicense = function () {
        return this.license;
    };
    Video.prototype.getComment = function () {
        return this.comments;
    };
    //setters
    Video.prototype.setComments = function (comments) {
        this.comments = comments;
    };
    Video.prototype.setID = function (id) {
        this.id = id;
    };
    Video.prototype.setTitle = function (title) {
        this.title = title;
    };
    Video.prototype.setUploadedBy = function (uploadedBy) {
        this.uploadedBy = uploadedBy;
    };
    Video.prototype.setDuration = function (duration) {
        this.duration = duration;
    };
    Video.prototype.setSubtitle = function (subtitle) {
        this.subtitle = subtitle;
    };
    Video.prototype.SetResolution = function (resolution) {
        this.resolution = resolution;
    };
    Video.prototype.setViewCount = function (viewCount) {
        this.viewCount = viewCount;
    };
    Video.prototype.setLikeCount = function (likeCount) {
        this.likeCount = likeCount;
    };
    Video.prototype.setDislikeCount = function (dislikeCount) {
        this.dislikeCount = dislikeCount;
    };
    Video.prototype.setSubscriberCount = function (subscriberCount) {
        this.subscriberCount;
    };
    Video.prototype.setNotificationSunscriberCount = function (notificationSunscriberCount) {
        this.notificationSunscriberCount = notificationSunscriberCount;
    };
    Video.prototype.setDescription = function (description) {
        this.description = description;
    };
    Video.prototype.setDateOfPublish = function (dateOfPublish) {
        return this.dateOfPublish = dateOfPublish;
    };
    Video.prototype.setCategory = function (category) {
        return this.category = category;
    };
    Video.prototype.setLicense = function (license) {
        return this.license = license;
    };
    Video.prototype.setComment = function (comments) {
        return this.comments = comments;
    };
    return Video;
}());
//Instance creation of Video class
var travelVideo = new Video("uniqueId", "This is a video", "TheGuyWithBadIdeas", 30.55, ["English", "Hindi"], 200, 150, 50, 60, 20, "A random description", "25/08/2018", "Travel", "Standard YouTube License");
var comments = [];
var comment1 = new Comments("TheGuyWithGoodIdeas", "26/05/2018", "A very good comment", 60, 10, 50);
var comment2 = new Comments("TheGuyWithNewIdeas", "21/05/2018", "A good comment", 30, 40, 12);
//assigning values
comments[0] = comment1;
comments[1] = comment2;
travelVideo.setComments(comments);
console.log(travelVideo);
