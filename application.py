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
    return render_template("index.html")
@app.route("/contact")
def contact():
    return render_template("contact.html")
@app.route("/blogposts/cs50x")
def cs50x():
    return render_template("cs50x.html")
@app.route("/blogposts/book")
def book():
    return render_template("book.html")
@app.route("/articleditor")
def articleditor():
    return render_template("article.html")


