from flask import Flask, render_template, request, redirect, make_response

app = Flask(__name__)

USERNAME = "admin"
PASSWORD = "12345"

@app.route("/")
def home():
    username = request.cookies.get("username")

    if username:
        return render_template("welcome.html", username=username)

    return render_template("login.html")

@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    password = request.form["password"]

    if username == USERNAME and password == PASSWORD:
        response = make_response(redirect("/"))
        response.set_cookie("username", username)
        return response

    return """
    <h2>Invalid Username or Password</h2>
    <a href="/">Try Again</a>
    """, 401

@app.route("/logout")
def logout():
    response = make_response(redirect("/"))
    response.delete_cookie("username")
    return response

if __name__ == "__main__":
    app.run(debug=True, port=5004)