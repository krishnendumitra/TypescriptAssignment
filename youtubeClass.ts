class Comments {
  userName: string;
  date: string;
  description: string;
  likeCount: number;
  dislikeCount: number;
  replyCount: number;

  constructor(
    userName: string,
    date: string,
    description: string,
    likeCount: number,
    dislikeCount: number,
    replyCount: number
  ) {
    this.userName = userName;
    this.date = date;
    this.description = description;
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
    this.replyCount = replyCount;
  }
}

class Video {
  private id: string;
  private title: string;
  private uploadedBy: string;
  private duration: number;
  private resolution: number[] = [144, 240, 360, 480, 720, 1080];
  private subtitle: string[];
  private viewCount: number;
  private likeCount: number;
  private dislikeCount: number;
  private subscriberCount: number;
  private notificationSunscriberCount: number;
  private description: string;
  private dateOfPublish: string;
  private category: string;
  private license: string;
  private comments: Comments[] = [];

  constructor(
    id: string,
    title: string,
    uploadedBy: string,
    duration: number,
    subtitle: string[],
    viewCount: number,
    likeCount: number,
    dislikeCount: number,
    subscriberCount: number,
    notificationSunscriberCount: number,
    description: string,
    dateOfPublish: string,
    category: string,
    license: string
  ) {
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

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getUploadedBy(): string {
    return this.uploadedBy;
  }

  public getDuration(): number {
    return this.duration;
  }

  public getSubtitle() {
    return this.subtitle;
  }

  public getResolution(): number[] {
    return this.resolution;
  }

  public getViewCount(): number {
    return this.viewCount;
  }

  public getLikeCount(): number {
    return this.likeCount;
  }

  public getDislikeCount(): number {
    return this.dislikeCount;
  }

  public getSubscriberCount(): number {
    return this.subscriberCount;
  }

  public getNotificationSunscriberCount(): number {
    return this.notificationSunscriberCount;
  }

  public getDescription(): string {
    return this.description;
  }

  public getDateOfPublish(): string {
    return this.dateOfPublish;
  }

  public getCategory(): string {
    return this.category;
  }
  public getLicense(): string {
    return this.license;
  }

  public getComment(): Comments[] {
    return this.comments;
  }

  //setters

  public setComments(comments: Comments[]) {
    this.comments = comments;
  }

  public setID(id: string) {
    this.id = id;
  }
  public setTitle(title: string) {
    this.title = title;
  }
  public setUploadedBy(uploadedBy: string) {
    this.uploadedBy = uploadedBy;
  }

  public setDuration(duration: number) {
    this.duration = duration;
  }

  public setSubtitle(subtitle: string[]) {
    this.subtitle = subtitle;
  }

  public SetResolution(resolution: number[]) {
    this.resolution = resolution;
  }

  public setViewCount(viewCount: number) {
    this.viewCount = viewCount;
  }

  public setLikeCount(likeCount: number) {
    this.likeCount = likeCount;
  }

  public setDislikeCount(dislikeCount: number) {
    this.dislikeCount = dislikeCount;
  }

  public setSubscriberCount(subscriberCount: number) {
    this.subscriberCount;
  }

  public setNotificationSunscriberCount(notificationSunscriberCount: number) {
    this.notificationSunscriberCount = notificationSunscriberCount;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public setDateOfPublish(dateOfPublish: string) {
    return (this.dateOfPublish = dateOfPublish);
  }

  public setCategory(category: string) {
    return (this.category = category);
  }
  public setLicense(license: string) {
    return (this.license = license);
  }

  public setComment(comments: Comments[]) {
    return (this.comments = comments);
  }
}

//Instance creation of Video class

let travelVideo = new Video(
  "uniqueId",
  "This is a video",
  "TheGuyWithBadIdeas",
  30.55,
  ["English", "Hindi"],
  200,
  150,
  50,
  60,
  20,
  "A random description",
  "25/08/2018",
  "Travel",
  "Standard YouTube License"
);

let comments: Comments[] = [];
let comment1 = new Comments(
  "TheGuyWithGoodIdeas",
  "26/05/2018",
  "A very good comment",
  60,
  10,
  50
);
let comment2 = new Comments(
  "TheGuyWithNewIdeas",
  "21/05/2018",
  "A good comment",
  30,
  40,
  12
);

//assigning values
comments[0] = comment1;
comments[1] = comment2;

travelVideo.setComments(comments);
console.log(travelVideo);
