import Mongo from 'meteor/mongo'

export const ContactsCollection = new Mongo.Mongo.Collection("contacts");