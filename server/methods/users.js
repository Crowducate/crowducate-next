Meteor.methods({
    'User.update': function (userId,target,doc) {
        if (Meteor.userId() == userId && target && doc)
        {
            console.log(userId + ":" + target + ":" + doc);
            console.log("user okay, target and doc not null");
            //TODO: simplify
            switch(target) {
                case "username":
                    console.log("Target is username");
                    Meteor.users.update(userId, {$set: {'username': doc}});
                    break;
                case "realname":
                    console.log("Target is realname");
                    Meteor.users.update(userId, {$set: {'realname': doc}});
                    break;
                case "gender":
                    console.log("Target is Gender");
                    Meteor.users.update(userId, {$set: {'gender': doc}});
                    break;
                case "language":
                    console.log("Target is Language");
                    Meteor.users.update(userId, {$set: {'language': doc}});
                    break;
                case "email":
                    console.log("Target is Email")
                    Meteor.users.update(userId, {$set: {'emails': [{'address': doc}]}});
                    break;
                case "biography":
                    console.log("Target is biography");
                    Meteor.users.update(userId, {$set: {'biography': doc}});
                    break;

                default:
                    console.log("No target");
                    break;
            }
        }
    }
});