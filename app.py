from flask import Flask, redirect, render_template, request

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/blogposts")
def posts():
    return render_template("blogposts.html")

@app.route("/aboutme")
def aboutme():
    return render_template("aboutme.html")

