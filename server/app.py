#!/usr/bin/env python3

import sys
sys.setrecursionlimit(1000)

from dotenv import load_dotenv
load_dotenv()

from flask import Flask, request, jsonify, make_response
from flask_migrate import Migrate
from models  import Dog,Location,Review,Contact, db
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/')
def index():
    response_body = {
        "message": "Database for dogs!"
    }
    response = make_response(
        response_body,
        200
    )
    return response 

@app.route('/dogs',methods = ['GET','POST'])
def dogs():

    dogs = Dog.query.all()

    if request.method == "GET":
        dogs_dict = [dog.to_dict() for dog in dogs]
        # dogs_dict = dogs.to_dict()
        response = make_response(
            jsonify(dogs_dict),
            200
        )

    elif request.method == 'POST':
        new_dog = Dog(
            name = request.get_json()['name'],
            breed = request.get_json()['breed'],
            age = request.get_json()['age'],
            price = request.get_json()['price'],
            location_id = request.get_json()['location_id'],
            review_id = request.get_json()['review_id'],
        )
        db.session.add(new_dog)
        db.session.commit()

        dog_dict = new_dog.to_dict()
        response = make_response(
            dog_dict,
            201
        )

    return response
    
@app.route('/dogs/<int:id>',methods = ['GET','DELETE'])
def dogs_id(id):

    dogs = Dog.query.filter(Dog.id == id).first()

    if not dogs:
        response_body = {
            'error': 'Dog does not exist :('
        }
        response = make_response(
            response_body,
            404
        )
        return response

    elif request.method == "GET":
        dogs_dict = dogs.to_dict()

        response = make_response(
            dogs_dict,
            200
        )
        return response

    elif request.method == "DELETE":
        try:
            db.session.delete(dogs)
            db.session.commit()

            response = make_response(
                {},
                200
            )
            return response
        
        except:
            response_body = {
                "error": "Dog not found"
            }

            response = make_response(
                response_body,
                404
            )
            return response
        
@app.route('/contacts',methods = ['GET','POST'])
def contact():

    contacts = Contact.query.all()

    if request.method == "GET":
        contacts_dict = [contact.to_dict() for contact in contacts]
        # dogs_dict = dogs.to_dict()
        response = make_response(
            jsonify(contacts_dict),
            200
        )
        return response

    elif request.method == 'POST':
        new_contact = Contact(
            name = request.get_json()['name'],
            email = request.get_json()['email'],
            comment = request.get_json()['comment']
        )
        db.session.add(new_contact)
        db.session.commit()

        new_contact_dict = new_contact.to_dict()
        response = make_response(
            jsonify(new_contact_dict),
            201
        )
        return response
    
        
@app.route('/contacts/<int:id>',methods = ['GET','DELETE'])
def contact_id(id):
    contact = Contact.query.filter(Contact.id == id).first()

    if request.method == "GET":
        contact_dict = contact.to_dict()
        response = make_response(
            jsonify(contact_dict),
            200
        )
        return response
    
    elif request.method == 'DELETE':
        try:
            db.session.delete(contact)
            db.session.commit()

            response = make_response(
                {},
                200
            )
            return response
        
        except:
            response_body = {
                "error": "Contact not found"
            }

            response = make_response(
                response_body,
                404
            )
            return response

if __name__ == '__main__':
    app.run(port=5555, debug=True)