from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy()


class Location(db.Model,SerializerMixin):
    __tablename__ = 'locations'
    serialize_rules = ('-dogs.location',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String,nullable=False)
    location = db.Column(db.String)

    dogs = db.relationship('Dog',backref='location')

class Dog(db.Model,SerializerMixin):
    __tablename__ = 'dogs'
    serialize_rules = ('-location.dogs','review.dogs')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    breed = db.Column(db.String)
    age = db.Column(db.Integer)
    price = db.Column(db.Integer)

    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'))
    review_id = db.Column(db.Integer, db.ForeignKey('reviews.id'))

class Review(db.Model,SerializerMixin):
    __tablename__ = 'reviews'
    serialize_rules = ('-dogs.review',)

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    reviews = db.Column(db.String)

    dogs = db.relationship('Dog',backref='review')

class Contact(db.Model,SerializerMixin):
    __tablename__ = 'contacts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True,nullable = False)
    comment = db.Column(db.String)

    
    @validates('name','email','comment')
    def validate_attributes(self,key,string):
        if key == 'name':
            if type(string) != str:
                raise ValueError('Not a valid name.')
            return string
        if key == 'email':
            if type(string) != str or '@' not in string:
                raise ValueError('Not valid email') 
            return string
        if key == 'comment':
            if type(string) != str or len(string) > 250:
                raise ValueError('Only 250 characters allowed!') 
            return string

    def __repr__(self):
        return f'Contact info: {self.name}, age: {self.age}, email: {self.email}'

    



