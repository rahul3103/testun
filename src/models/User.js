/* eslint-disable no-use-before-define */
/* eslint-disable radix */
class User {
  constructor(user) {
    this.firstName = user.first_name ? user.first_name.toUpperCase() : '';
    this.lastName = user.last_name ? user.last_name : '';

    // Let's keep these as common keys for all the models
    /* Common Keys */
    this.uid = user.uid;
    this.name = `${this.firstName} ${this.lastName}`;
    this.thumbnail = user.avatar || null;
    this.description = user.bio || null;
    this.permalink = user.permalink;
    this.relativeLink = user.relative_link || `/@${this.username}`;
    this.averageRating = user.avg_rating;
    /* Common Keys */

    this.username = user.username || null;
    this.referralInfo = user.referral_info;
    this.followersCount = parseInt(user.followers_count);
    this.followingCount = parseInt(user.follows_count);
    this.lifetimeViews = parseInt(user.lifetime_views);
    this.starRatings = parseInt(user.star_ratings);
    this.isFollowing = user.is_following;
    this.postsCount = parseInt(user.posts_count);
    this.coursesCount = parseInt(user.courses_count);

    this.isEducator = user.is_educator;
    this.isVerifiedEducator = user.is_verified_educator;
    this.isEmailVerified = user.is_email_verified;
    this.isPhoneVerified = user.is_phone_verified;
    this.isProfileFilled = user.is_profile_filled;

    this.phone = user.phone;
    this.email = user.email;
    this.state = user.state;
    this.country = user.country;
    this.language = user.language;

    this.plusSubscription = user.plus_subscriptions;
    this.plusSubscriptionUids = getPlusSubscriptionsUids(this);
    this.expiredSubscriptionsUids = getExpiredSubscriptionUids(this);
  }
}

const getEntityData = data => {
  const user = new User(data);
  return user;
};

const getPlusSubscriptionsUids = user => {
  if (user.plusSubscription) {
    const plusSubscriptionsValid = user.plusSubscription.filter(
      plusSubscription => {
        return plusSubscription.time_remaining > 0;
      }
    );
    const arrayIds = plusSubscriptionsValid.map(subscription => {
      return subscription.subscription.value.uid;
    });
    return arrayIds;
  }
  return [];
};

const getExpiredSubscriptionUids = user => {
  if (user.plusSubscription) {
    const plusSubscriptionsExpired = user.plusSubscription.filter(
      plusSubscription => {
        return plusSubscription.time_remaining <= 0;
      }
    );
    const arrayIds = plusSubscriptionsExpired.map(subscription => {
      return subscription.subscription.value.uid;
    });
    return arrayIds;
  }
  return [];
};

export default { User, getEntityData };
