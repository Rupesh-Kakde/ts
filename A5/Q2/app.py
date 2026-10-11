from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return """
    <h1>Flask App Routing</h1>
    <p>Enter a name in the URL.</p>
    <p>Example: http://127.0.0.1:5001/hello/Rahul</p>
    """

@app.route("/hello/<name>")
def hello(name):
    return f"""
    <h1>Hello, {name}!</h1>
    <p>Welcome to Flask App Routing.</p>
    """

@app.route("/square/<int:number>")
def square(number):
    result = number * number
    return f"""
    <h1>Number: {number}</h1>
    <p>Square of {number} = {result}</p>
    """

if __name__ == "__main__":
    app.run(debug=True, port=5001)