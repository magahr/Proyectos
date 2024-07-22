from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
# asociando una funcion a una url
    return "Hello, World"