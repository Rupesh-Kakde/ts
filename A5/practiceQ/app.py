from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.secret_key = "my_secret_key_123"

USERNAME = "admin"
PASSWORD = "12345"

@app.route("/")
def home():
    if "username" in session:
        return render_template("welcome.html", username=session["username"])

    return render_template("login.html")

@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    password = request.form["password"]

    if username == USERNAME and password == PASSWORD:
        session["username"] = username
        return redirect("/")

    return """
    <h2>Invalid Username or Password</h2>
    <a href="/">Try Again</a>
    """, 401

@app.route("/logout")
def logout():
    session.pop("username", None)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True, port=5005)