## Steps

```
meteor create --release 1.8.1 meteor-template (1.8.2 - 1.8.3 has a bug)
cd meteor-template
meteor npm install --save vue
meteor remove blaze-html-templates
meteor add static-html
meteor add akryum:vue-component

Add content as shown in: https://guide.meteor.com/vue.html

NO_HMR=1 meteor run --port 8085 --settings settings.json

```

## Database

```
Each app under development gets its own DB. From your app’s root:

.meteor/local/db

```

## Check database

```
ou probably want to connect to the database, rather than look at the storage.

Start your app:

meteor run
then in another console in your app’s root, do

meteor mongo
That will give you access to the MongoDB shell 7, where you can use any of MongoDB’s commands. For example:

show collections
db.someCollectionName.find().pretty()
and so on.

```

## Update

```
db.time.update(
   { _id: "AEv2JWhrHogavY6gB" },
   {
     $set: {
       "time" : ISODate("2018-12-21T11:04:37.431Z")
     }
   }
)
```