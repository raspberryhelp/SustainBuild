from flask import Flask, request, jsonify, send_from_directory, redirect, url_for

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'
