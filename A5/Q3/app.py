from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("form.html")

@app.route("/submit", methods=["POST"])
def submit():
    custname = request.form["CustName"]
    email = request.form["email"]
    mobno = request.form["MobNo"]
    address = request.form["address"]
    pincode = request.form["pincode"]

    return render_template(
        "customer.html",
        custname=custname,
        email=email,
        mobno=mobno,
        address=address,
        pincode=pincode
    )

if __name__ == "__main__":
    app.run(debug=True, port=5002)