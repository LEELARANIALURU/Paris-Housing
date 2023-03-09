from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/predict_home_price', methods=['GET', 'POST'])
def predict_home_price():
    area = float(request.form['area'])
    rooms = int(request.form['rooms'])
    yard = int(request.form['yard'])
    pool = int(request.form['pool'])
    floors = int(request.form['floors'])
    expensive = int(request.form['expensive'])
    prev_owners = int(request.form['prev_owners'])
    built = int(request.form['built'])
    newOrNot = int(request.form['newOrNot'])
    storm = int(request.form['storm'])
    basement = int(request.form['basement'])
    garage = int(request.form['garage'])
    storage = int(request.form['storage'])

    response = jsonify({
        'estimated_price': util.get_estimated_price(area, rooms, yard, pool, floors, expensive, prev_owners, built, newOrNot, storm, basement, garage, storage)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run()