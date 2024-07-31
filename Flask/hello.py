from flask import Flask
import os
# tipos de metodos
# get es para recuperar informacion del servido.
# post, es para enviar datos al servidor para su procesamiento
app = Flask(__name__)

@app.route('/')
def hello_world():
# asociando una funcion a una url
    return "Hello, World"

# if __name__=='__main__':
#     app.run(debug=True)