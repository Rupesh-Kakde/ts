from flask import Flask, render_template, request, abort

app = Flask(__name__)

CORRECT_PASSWORD = "12345"

@app.route("/")
def home():
    return render_template("login.html")

@app.route("/login", methods=["POST"])
def login():
    password = request.form["password"]

    if password != CORRECT_PASSWORD:
        abort(401)

    return render_template("success.html")

@app.errorhandler(401)
def unauthorized(error):
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Unauthorized Access</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background: #f2f4f7;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            .error-box {
                background: white;
                width: 450px;
                padding: 40px;
                text-align: center;
                border-radius: 12px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.12);
            }

            h1 {
                color: #c62828;
            }

            p {
                color: #555;
                font-size: 17px;
            }

            a {
                display: inline-block;
                margin-top: 20px;
                padding: 12px 25px;
                background: #222;
                color: white;
                text-decoration: none;
                border-radius: 6px;
            }

            a:hover {
                background: #444;
            }
        </style>
    </head>
    <body>

        <div class="error-box">
            <h1>401 - Unauthorized</h1>
            <p>Incorrect password. Access denied.</p>
            <a href="/">Try Again</a>
        </div>

    </body>
    </html>
    """, 401

if __name__ == "__main__":
    app.run(debug=True, port=5003)