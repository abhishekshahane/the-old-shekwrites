from flask import Flask, redirect, render_template, request

app = Flask(__name__, static_url_path='/static')
#First handle 404 errors
@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/blogposts", methods=["GET", "POST"])
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
@app.route("/blogposts/book", methods=["GET", "POST"])
def book():
    return render_template("book.html")
@app.route("/articleditor")
def articleditor():
    return render_template("article.html")



