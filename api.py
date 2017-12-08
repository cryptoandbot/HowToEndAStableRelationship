#!/usr/bin/env python3

"""
How To End A Stable Relationship
api.py
desc: api for the website
"""

from Flast import Flask, request, json, redirect
from flast_restful import Resource, Api, reqparse
from flask_httpauth import HTTPBasicAuth
from sqlalchemy import create_engine
from json import dumps
from random import randint

e = create_engine('sqlite3:///api.sqlite3')

app = Flask(__name__, static_folder='static', static_url_path='')

api = Api(app)

auth = HTTPBasicAuth()

USER_DATA = {
    "admin": "G2G2chemistry"
}

@auth.verify_password
def verify(username, password):
    if not (username and password):
        return False
    return USER_DATA.get(username) == password

def validate(args):
    return True

class AddBlock(Resource):
    def post(self):
        parser = reqparse.RequestParser()
    	parser.add_argument('username', type=str, required=False)
    	parser.add_argument('block', type=str, required=True, help="Submission cannot be blank!")
    	args = parser.parse_args()
    	if validate(args):
    		conn = e.connect()
    		conn.execute("INSERT INTO blocks (username, block) VALUES (?, ?)", args['username'], args['submission'])
    		return redirect("/uploaded.html")
    	else:
    		return redirect("/index.html")

class GetUnconfirmedBlock(Resource):
    def get(self):
        conn = e.connect()
        query = conn.execute("SELECT * FROM blocks WHERE confirmed=0 ORDER BY ID")
        return {'blocks': [dict(zip(tuple (query.keys()), i)) for i in query.cursor]}

class ConfirmBlock(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('ID', type=str, required=True)
        args = parser.parse_args()
        try:
                conn = e.connect()
                conn.execute("UPDATE blocks SET confirmed=1 WHERE id=?", args['ID'])
                return {"result":"SUCCESS"}
        except:
                return {"result":"FAILED"}

class DeleteBlock(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('ID', type=str, required=True)
        args = parser.parse_args()
        try:
                conn = e.connect()
                conn.execute("DELETE FROM blocks WHERE id=?", args['ID'])
                return {"result":"SUCCESS"}
        except:
                return {"result":"FAILED"}

class RandomBlock(Resource):
    def get(self, blockType):
        conn = e.connect()
        if blockType != 'any':
            query = conn.execute("SELECT * FROM blocks WHERE confirmed=1 AND blockType=? ORDER BY ID", blockType)
        else:
            query = conn.execute("SELECT * FROM blocks WHERE confirmed=1 ORDER BY ID")
        blocks = [dict(zip(tuple (query.keys()), i)) for i in query.cursor]
        randomBlockNum = randint(0, len(blocks)-1)
        return {'block': blocks[randomBlockNum]}


class Block(Resource):
    def get(self, blockID):
        conn = e.connect()
        query = conn.execute("SELECT * FROM blocks WHERE ID=? AND confirmed=1", blockID)
        return {'block': query.fetchone()}

api.add_resource(Block, '/api/v1/<string:blockID>')
api.add_resource(RandomBlock, '/api/v1/<string:blockType>')
api.add_resource(DeleteBlock, '/api/v1/delete')
api.add_resource(ConfirmBlock, '/api/v1/delete')
api.add_resource(GetUnconfirmedBlock, '/api/v1/unconfirmed')
api.add_resource(AddBlock, '/api/v1/add')

if __name__ == '__main__':
    app.run()
