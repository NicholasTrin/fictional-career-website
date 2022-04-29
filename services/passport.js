const passport = require("passport");
const UserInfoError = require("passport-google-oauth20/lib/errors/userinfoerror");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../keys");
const mongoose = require('mongoose');
mongoose.connect(keys.mongoDb);
const User = mongoose.model('users');

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async function (accessToken, refreshToken, profile, done) {
        //console.log(accessToken,refreshToken,profile,done);
        console.log(profile.id);
        const existingUser = await User.findOne({googleId: profile.id});
        if (existingUser === null){
            const user = await new User({googleId: profile.id}).save();
            return done(null,user);
        }
        return done(null,existingUser);
    }
  )
);
