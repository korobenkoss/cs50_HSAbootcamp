from flask import Flask
import random
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/hi')
def hi():
    return 'Hi there, Ihor!'

@app.route('/random_number')
def random_number():
    return str(random.randint(3, 9))
