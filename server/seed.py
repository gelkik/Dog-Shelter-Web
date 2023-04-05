#!/usr/bin/env python3

from random import choice as rc, randint

from faker import Faker

from app import app
from models import db, Dog,Location,Review,Contact

# images need to be in img


fake = Faker()

with app.app_context():
    Dog.query.delete()
    Location.query.delete()
    Review.query.delete()

    breed = ['German Shepherd', 'Siberian Husky', 'Golden Retriever']
    dogs = []
    locations = []
    reviews = []
    reviews_dog = ['Good boy.','Loves humans.','Cute boy.','Needs attention but calm dog.','Looking for love, that is all.','Calm as can be.']
    for i in range(6):
        location = Location(name = fake.company(), location = fake.address())
        locations.append(location)
    for i in range(6):
        review = Review(rating = randint(3,5), reviews = rc(reviews_dog))
        reviews.append(review)
    for i in range(6):
        dog = Dog(name = fake.first_name(), breed = rc(breed), age = randint(2,9), price = randint(0,40),location = rc(locations),review = rc(reviews))
        dogs.append(dog)

    emails = []
    for i in range(3):
        email = Contact(
            name=fake.name(),
            email= fake.email(),
            comment=fake.text(max_nb_chars=250)
        )
        emails.append(email)
    
    db.session.add_all(dogs)
    db.session.add_all(locations)
    db.session.add_all(reviews)
    db.session.commit()
    db.session.add_all(emails)
    db.session.commit() 